import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import token from '../utils/token';
import { APIError } from '../@types/api';

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

export const createDefaultAPIError = (error: unknown): APIError => {
  if (error instanceof AxiosError) {
    return {
      isSuccess: false,
      message: error.response?.data.message,
    };
  }
  return { isSuccess: false, message: '알 수 없는 에러입니다.' };
};

export default instance;
