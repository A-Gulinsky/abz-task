import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = process.env.REACT_APP_API_URL

// GET | Token
export const getToken = createAsyncThunk(
  'token/getToken',
  async () => {
    const response = await axios.get('/token');
    return response.data.token;
  }
);

// GET | Positions
export const fetchPositions = createAsyncThunk(
  'positions/fetchPositions',
  async () => {
    const response = await axios.get('/positions');
    return response.data.positions;
  }
);

// Users | GET
export const getUsers = createAsyncThunk(
  'users/getUsers',
  async () => {
    const response = await axios.get('/users?page=1&count=6');
    return response.data.users;
  }
);

// Users | GET (Show more btn)
export const loadMoreBtnGetUsers = createAsyncThunk(
  'users/loadMoreGetUsers',
  async (_, { getState }) => {
    const page = getState().users.page;
    const response = await axios.get(`/users?page=${page}&count=6`);
    return response.data.users;
  }
);

// Users | POST
export const createUser = createAsyncThunk(
  'users/createUser',
  async ({ formData, token }) => {
    try {
      const response = await axios.post('/users', formData, {
        headers: {
          'Token': token
        }
      });
      
      const responseData = response.data;

      if (!responseData.success) {
        throw new Error(responseData.message);
      }

      return responseData;
    } catch (error) {
      throw error;
    }
  }
);