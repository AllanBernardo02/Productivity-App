import axios from "axios";

const BASE_URL = "http://localhost:5000";

const api = axios.create({
  baseURL: BASE_URL,
});

export const registerUser = async (formData) => {
  try {
    const response = await api.post("/api/signup", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await api.post("/api/signin", formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTodo = async (formData) => {
  try {
    const response = await api.post('/api/createTodo', formData)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getTodo = async () => {
  try {
    const response = await api.get('/api/getTodo')
    return response.data
  } catch (error) {
    throw error
  }
}

export const deleteTodo = async (id) => {
  console.log("get haha", id)
  try {
    const response = await api.delete(`/api/deleteTodo/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export const getSuperHeroes = async () => {
  try {
    const response = await axios.get('http://localhost:4000/superheroes')
    return response.data
  } catch (error) {
    throw error
  }
}

export const createSuperHeroes = async (superheroes) => {
  try {
    const response = await axios.post('http://localhost:4000/superheroes', superheroes)
    return response.data
  } catch (error) {
    console.log("create-error", error.message)
    throw error
  }
}