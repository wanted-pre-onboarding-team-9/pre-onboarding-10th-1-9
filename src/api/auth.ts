import { AxiosError } from 'axios';
import ApiUrl from './ApiUrl';
import instance, { createDefaultAPIError } from './index';
import { Auth } from '../@types/auth';
import { APIResponse, SignInResponse, SignUpResponse } from '../@types/api';

const signUp = async ({ email, password }: Auth): Promise<APIResponse<SignUpResponse>> => {
  try {
    const res = await instance.post(ApiUrl.signUp, { email, password });
    return {
      isSuccess: true,
      data: res.data,
    };
  } catch (error) {
    return createDefaultAPIError(error);
  }
};

const signIn = async ({ email, password }: Auth): Promise<APIResponse<SignInResponse>> => {
  try {
    const res = await instance.post<SignInResponse>(ApiUrl.signIn, { email, password });
    return { isSuccess: true, data: res.data };
  } catch (error) {
    if (error instanceof AxiosError && error.response?.data.statusCode === 401) {
      return {
        isSuccess: false,
        message: '잘못된 비밀번호입니다.',
      };
    }
    return createDefaultAPIError(error);
  }
};

export { signUp, signIn };
