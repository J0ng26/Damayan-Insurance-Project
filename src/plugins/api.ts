/**
 * plugins/api.ts
 *
 * API Service for connecting to the Ticket System backend
 */

import axios from 'axios';

// Create axios instance with base URL from environment variables
const api = axios.create({
  baseURL: import.meta.env.VITE_TICKET_API_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// Message Service for Contact Support Form
export const messageService = {
  /**
   * Submit a new contact support message to the ticket system
   * @param data - Message data to submit
   * @returns Promise with the API response
   */
  async add(data: {
    title: string;
    description: string;
    email?: string;
    contact_no?: string;
    series_no?: string;
    last_name: string;
    middle_name?: string;
    first_name: string;
    plan?: string;
    entity: string;
  }) {
    try {
      const response = await api.post('/message/add', data);
      return response.data;
    } catch (error: any) {
      // Handle validation errors from Laravel
      if (error.response?.status === 422) {
        throw new Error(error.response.data.message || 'Validation failed');
      }
      // Handle other errors
      throw new Error(error.response?.data?.message || 'Failed to submit message. Please try again.');
    }
  },
};

export default api;
