import axios from 'axios'

const BASE_URL = 'http://localhost:5000';

const api = axios.create({
    baseURL: BASE_URL
  });

export const registerUser = async (formData) => {
    try {
        const response = await api.post("/api/signup", formData)
        return response.data
    } catch (error) {
        throw error
    }
}