import axios from "axios";
import { API_URL } from "./ApiURL";

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
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw error.response.data;
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  logout: async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem("accessToken");

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
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
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
