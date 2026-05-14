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
  withCredentials: false,
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
    plan?: string;
    concern_info: any[];
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

export default api;