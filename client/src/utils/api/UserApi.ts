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
    const refreshToken = getRefreshToken(); // Use the helper function
    const accessToken = getAccessToken(); // Use the helper function

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
      clearTokens(); // Use the helper function to clear tokens
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
