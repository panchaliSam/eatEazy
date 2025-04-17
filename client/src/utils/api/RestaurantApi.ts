import axios from "axios";
import { API_URL } from "./ApiURL";
import { getAuthHeaders } from "../helper/AuthHelper";
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  clearTokens,
} from "../helper/TokenHelper";
import { get } from "http";

interface RestaurantData {
  restaurantName?: string;
  address?: string;
  phone?: string;
  availability?: string;
}

const RestaurantApi = {
  registerRestaurant: async (restaurantData: RestaurantData) => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("No access token found.");
    }
    try {
      const response = await axios.post(
        `${API_URL}/restaurants/register`,
        restaurantData,
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
        throw new Error(
          error.response.data.message || "Failed to register restaurant."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  getAllRestaurants: async () => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("No access token found.");
    }
    try {
      const response = await axios.get(`${API_URL}/restaurants`, {
        headers: getAuthHeaders(),
      });
      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(
          error.response.data.message || "Failed to fetch restaurants."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },

  getRestaurantById: async (restaurantId: string) => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      throw new Error("No access token found. Please log in again.");
    }
    try {
      const response = await axios.get(
        `${API_URL}/restaurants/${restaurantId}`,
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
        throw new Error(
          error.response.data.message || "Failed to fetch restaurant."
        );
      }
      throw new Error("An unexpected error occurred.");
    }
  },
};

export default RestaurantApi;
