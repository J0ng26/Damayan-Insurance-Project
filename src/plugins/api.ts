/**
 * plugins/api.ts
 *
 * API Service for connecting to the Ticket System backend
 */

import axios from 'axios';

// ✅ Dynamic baseURL depending on environment
const baseURL =
  import.meta.env.VITE_RUNTYPE === "development"
    ? import.meta.env.VITE_TICKET_API_DEV
    : import.meta.env.VITE_TICKET_API_PROD;

// ✅ Create axios instance
const api = axios.create({
  baseURL: baseURL || 'http://localhost:8000/api', // fallback
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

let csrfCookiePromise: Promise<void> | null = null;

const getApiOrigin = (url: string): string => {
  try {
    return new URL(url).origin;
  } catch {
    return '';
  }
};

const ensureCsrfCookie = async (): Promise<void> => {
  if (!csrfCookiePromise) {
    const origin = getApiOrigin(api.defaults.baseURL || '');
    const csrfCookieUrl = origin ? `${origin}/sanctum/csrf-cookie` : '/sanctum/csrf-cookie';

    csrfCookiePromise = api.get(csrfCookieUrl).then(() => undefined).catch((error) => {
      csrfCookiePromise = null;
      throw error;
    });
  }

  await csrfCookiePromise;
};

// Message Service for Contact Support Form
export const messageService = {
  /**
   * Submit a new contact support message to the ticket system
   */
  async add(data: {
    title: string;
    description: string;
    email?: string;
    contact_no?: string;
    maf_no?: string;
    last_name: string;
    middle_name?: string;
    first_name: string;
    complainant_last_name?: string;
    complainant_middle_name?: string;
    complainant_first_name?: string;
    plan?: string;
    concern_info: any[] | Record<string, any>;
    files?: File[];
  }) {
    try {
      await ensureCsrfCookie();

      let payload: any = data;
      let headers: any = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };

      if (data.files && data.files.length > 0) {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
          if (key === 'files') {
            data.files?.forEach((file, index) => {
              formData.append(`files[${index}]`, file);
            });
          } else if (key === 'concern_info') {
            formData.append(key, JSON.stringify(data[key]));
          } else {
            formData.append(key, (data as any)[key] || '');
          }
        });
        payload = formData;
        headers['Content-Type'] = 'multipart/form-data';
      }

      const response = await api.post('/message/add', payload, { headers });
      return response.data;
    } catch (error: any) {
      // Handle validation errors from Laravel
      if (error.response?.status === 422) {
        throw error.response.data.errors || error.response.data.message || 'Validation failed';
      }

      if (error.response?.status === 419) {
        csrfCookiePromise = null;
        throw new Error('Session expired. Please try submitting the form again.');
      }

      // Handle other errors
      throw new Error(
        error.response?.data?.message ||
        'Failed to submit message. Please try again.'
      );
    }
  },
};

export const cookieConsentService = {
  /**
   * Submit cookie consent choice
   */
  async add(data: { status: 'accepted' | 'declined' }) {
    try {
      const response = await api.post('/cookie-consent', data);
      return response.data;
    } catch (error: any) {
      console.error('Failed to submit cookie consent', error);
      // Fail silently for tracking
      return null;
    }
  }
};

// Auth Service for Admin Portal
export const authService = {
  async login(credentials: { username: string; password: string }) {
    try {
      await ensureCsrfCookie();
      const response = await api.post('/authenticate', credentials);
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 422) {
        throw error.response.data.errors || error.response.data.message || 'Validation failed';
      }
      throw new Error(error.response?.data?.message || 'Login failed. Please check your credentials.');
    }
  },

  async logout() {
    try {
      const response = await api.post('/user-control/logout');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Logout failed.');
    }
  },

  async getUser() {
    try {
      const response = await api.get('/user');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Unauthenticated');
    }
  }
};

// Legal Documents Service
export const legalDocumentService = {
  async getAll() {
    try {
      const response = await api.get('/legal-documents');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch legal documents.');
    }
  },

  async upload(title: string, files: File[]) {
    try {
      await ensureCsrfCookie();
      const formData = new FormData();
      formData.append('title', title);
      files.forEach((file, index) => {
        formData.append(`files[${index}]`, file);
      });

      const response = await api.post('/legal-documents', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      if (error.response?.status === 422) {
        throw error.response.data.errors || error.response.data.message || 'Validation failed';
      }
      throw new Error(error.response?.data?.message || 'Failed to upload document.');
    }
  },

  async delete(id: string) {
    try {
      await ensureCsrfCookie();
      const response = await api.delete(`/legal-documents/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to delete document.');
    }
  }
};

// Concerns Service
export const concernService = {
  async getAll() {
    try {
      const response = await api.get('/concerns');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch concerns.');
    }
  }
};

// Plan Types Service
export const planTypeService = {
  async getAll() {
    try {
      const response = await api.get('/plan-types');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch plan types.');
    }
  }
};

// Blogs Service
// API returns: { id, title, content, image_path (thumbnail), images: string[], created_at, updated_at }
export const blogService = {
  async getAll() {
    try {
      const response = await api.get('/blogs');
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blogs.');
    }
  }
};

export default api;
