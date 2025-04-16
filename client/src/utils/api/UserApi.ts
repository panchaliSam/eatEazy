import axios from "axios";
import { API_URL } from "./ApiURL";
import { getAuthHeaders } from "../helper/AuthHelper";
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  clearTokens,
} from "../helper/TokenHelper";

interface UserData {
  firstname?: string;
  lastname?: string;
  email: string;
  password: string;
  phone?: string;
  role?: string;
}

const UserApi = {
  register: async (userData: UserData) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, userData);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  login: async (userData: Pick<UserData, "email" | "password">) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: userData.email,
        password: userData.password,
      });
      const { accessToken, refreshToken } = response.data;
      setTokens(accessToken, refreshToken); // Use the helper function here
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  logout: async () => {
    const refreshToken = getRefreshToken();
    const accessToken = getAccessToken();

    if (!refreshToken) {
      throw new Error("No refresh token found.");
    }

    if (!accessToken) {
      throw new Error("No access token found.");
    }

    try {
      const response = await axios.post(
        `${API_URL}/auth/logout`,
        {
          refreshToken: refreshToken,
        },
        {
          headers: getAuthHeaders(),
        }
      );
      clearTokens();
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  getUserById: async () => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("No access token found. Please log in again.");
    }
    try {
      const verifyResponse = await axios.post(
        `${API_URL}/auth/verify`,
        {
          accessToken: accessToken,
        },
        {
          headers: getAuthHeaders(),
        }
      );
      const { user } = verifyResponse.data;
      if (!user || user.id) {
        throw new Error("Invalid response from token verification.");
      }
      const userId = user.id;
      const userDetailsResponse = await axios.get(
        `${API_URL}/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return userDetailsResponse.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to fetch user details."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },
};

export default UserApi;
