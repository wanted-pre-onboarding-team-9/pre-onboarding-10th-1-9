import { AxiosError } from 'axios';
import ApiUrl from './ApiUrl';
import instance from './index';

interface AuthProp {
  email: string;
  password: string;
}

interface signInResponse {
  access_token: string;
}
interface signUpResponse {
  message: string;
}

const signUp = async ({ email, password }: AuthProp) => {
  try {
    const result = await instance.post<signUpResponse>(ApiUrl.signUp, { email, password });
    if (result.status === 201) {
      return {
        message: '회원가입이 완료되었습니다.',
      };
    }
    throw new Error('잘못된 입력 입니다.');
  } catch (error) {
    if (error instanceof AxiosError) {
      return {
        message: error.response?.data.message,
      };
    }
    return { message: error };
  }
};

const signIn = async ({ email, password }: AuthProp) => {
  try {
    const result = await instance.post<signInResponse>(ApiUrl.signIn, { email, password });
    if (result.status === 200) {
      return result.data;
    }
    throw new Error('잘못된 입력 입니다.');
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.status === 401) {
        return {
          statusCode: 401,
          message: '잘못된 비밀번호 입니다.',
        };
      }
      return error.response?.data.message;
    }
    return { message: error };
  }
};

export { signUp, signIn };
