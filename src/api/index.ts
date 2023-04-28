import axios, { InternalAxiosRequestConfig } from 'axios';
import token from '../utils/token';

const instance = axios.create({
  baseURL: 'https://www.pre-onboarding-selection-task.shop/',
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accesstoken = token.get();
    if (accesstoken != null)
      Object.assign(config.headers, { Authorization: `Bearer ${accesstoken}` });
    return config;
  },

  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
