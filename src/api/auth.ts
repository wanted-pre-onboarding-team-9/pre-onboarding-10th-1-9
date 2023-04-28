import { AxiosError } from 'axios';
import ApiUrl from './ApiUrl';
import instance from './index';
import { Auth } from '../@types/auth';
import { SignInResponse, SignUpResponse } from '../@types/response';

const signUp = async ({ email, password }: Auth) => {
  try {
    const result = await instance.post<SignUpResponse>(ApiUrl.signUp, { email, password });
    if (result.status === 201) {
      return {
        success: true,
        message: '회원가입이 완료되었습니다.',
      };
    }
    throw new Error('[ERROR] 잘못된 입력 입니다.');
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        success: false,
        message: `[ERROR] ${error.response?.data.message}`,
      };
    }
    return { success: false, message: error };
  }
};

const signIn = async ({ email, password }: Auth) => {
  try {
    const result = await instance.post<SignInResponse>(ApiUrl.signIn, { email, password });
    if (result.status === 200) {
      return { success: true, access_token: result.data.access_token };
    }
    throw new Error('[ERROR] 잘못된 입력 입니다.');
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.data.statusCode === 401) {
        return {
          success: false,
          message: '[ERROR] 잘못된 비밀번호 입니다.',
        };
      }
      return {
        success: false,
        message: `[ERROR] ${error.response?.data.message}`,
      };
    }
    return { success: false, message: error };
  }
};

export { signUp, signIn };
