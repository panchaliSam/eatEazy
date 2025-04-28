// src/api/NotificationApi.ts

import axios from 'axios';
import { API_URL } from './ApiURL';  // Assuming you have this file set up
import { INotification } from '../../interfaces/INotification'; // Adjust the import path as necessary
import { getAccessToken } from '../helper/TokenHelper';
import { getAuthHeaders } from '../helper/AuthHelper';

const NotificationApi = {
  // Create a notification
  createNotification: async (userId: number, message: string, channel: 'SMS' | 'Email' | 'InApp', type: string | null): Promise<{ message: string }> => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found. Please log in again.");

    try {
      const response = await axios.post(
        `${API_URL}/notifications/create`,
        { userId, message, channel, type },
        {
          headers: {
            ...getAuthHeaders(),
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || "Failed to create notification.");
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  // Send an email notification
  sendEmailNotification: async (email: string, userId: number, type: string, data: any): Promise<{ message: string }> => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found. Please log in again.");

    try {
      const response = await axios.post(
        `${API_URL}/notifications/send-email`,
        { email, userId, type, data },
        {
          headers: {
            ...getAuthHeaders(),
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || "Failed to send email notification.");
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  // Send an SMS notification
  sendSMSNotification: async (phone: string, userId: number, type: string, data: any): Promise<{ message: string }> => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found. Please log in again.");

    try {
      const response = await axios.post(
        `${API_URL}/notifications/send-sms`,
        { phone, userId, type, data },
        {
          headers: {
            ...getAuthHeaders(),
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || "Failed to send SMS notification.");
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  // Get notifications for the current user
  getMyNotifications: async (): Promise<INotification[]> => {
    const accessToken = getAccessToken();
    if (!accessToken) throw new Error("No access token found. Please log in again.");

    try {
      const response = await axios.get(`${API_URL}/notifications/myNotifications`, {
        headers: {
          ...getAuthHeaders(),
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || "Failed to fetch notifications.");
      }
      throw new Error("An unexpected error occurred.");
    }
  },
};

export default NotificationApi;
