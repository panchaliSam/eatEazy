import axios from "axios";
import { API_URL } from "./ApiURL";
import { getAuthHeaders } from "../helper/AuthHelper";
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  clearTokens,
} from "../helper/TokenHelper";
import { IUser } from "../../interfaces/IUser";

const UserApi = {
  register: async (userData: IUser) => {
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

  login: async (userData: Pick<IUser, "email" | "password">) => {
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        email: userData.email,
        password: userData.password,
      });
      const { accessToken, refreshToken } = response.data;
      setTokens(accessToken, refreshToken);
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
          token: accessToken,
        },
        {
          headers: getAuthHeaders(),
        }
      );
      const { user } = verifyResponse.data;

      if (!user || !user.id) {
        throw new Error("Invalid response from token verification.");
      }

      const userId = user.id;
      const userDetailsResponse = await axios.get(
        `${API_URL}/auth/users/${userId}`,
        {
          headers: getAuthHeaders(),
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

  verifyToken: async () => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("No access token found. Please log in again.");
    }
    try {
      const response = await axios.post(
        `${API_URL}/auth/verify`,
        {
          token: accessToken,
        },
        {
          headers: getAuthHeaders(),
        }
      );
      return response.data.user;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  updateUserById: async (updateData: Partial<IUser>) => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("No access token found. Please log in again.");
    }

    try {
      const user = await UserApi.verifyToken();
      const userId = user.id;

      if (!userId) {
        throw new Error("User ID not found.");
      }

      const response = await axios.put(
        `${API_URL}/auth/users/${userId}`,
        updateData,
        {
          headers: getAuthHeaders(),
        }
      );
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  getAllUser: async () => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("No access token found. Please log in again.");
    }
    try {
      const response = await axios.get(`${API_URL}/auth/users`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  deleteUserById: async (userId: string) => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("No access token found. Please log in again.");
    }
    try {
      const response = await axios.delete(`${API_URL}/auth/users/${userId}`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw new Error("An unexpected error occurred.");
    }
  },
};

export default UserApi;
