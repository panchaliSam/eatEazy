import axios from 'axios';
import {API_URL} from './ApiURL';

interface UserData {
    firstname?: string;
    lastname?: string;
    email: string;
    password: string;
    phone?: string;
    role?: string;
}

const UserApi = {
    register:async(userData : UserData) => {
        try{
            const response = await axios.post(`${API_URL}/auth/register`, userData);
            return response.data;
        }catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) {
                throw error.response.data;
            }
            throw new Error('An unexpected error occurred.');
        }
    },

    login:async(userData : Pick<UserData, 'email' | 'password'>) => {
        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email: userData.email,
                password: userData.password
            });
            return response.data;
        }catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) {
                throw error.response.data;
            }
            throw new Error('An unexpected error occurred.');
        }
    }
}

export default UserApi;