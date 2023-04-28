export const isInvalidEmail = (email: React.InputHTMLAttributes<HTMLInputElement>['value']) => {
  if (typeof email !== 'string') {
    return '이메일 입력을 확인해 주세요.';
  }
  if (!email.includes('@')) {
    return "이메일에는 '@'가 포함되어야 합니다.";
  }
  return null;
};

export const isInvalidPassword = (
  password: React.InputHTMLAttributes<HTMLInputElement>['value'],
) => {
  if (typeof password !== 'string') {
    return '비밀번호 입력을 확인해 주세요.';
  }
  if (password.length < 8) {
    return '비밀번호는 8자 이상이어야 합니다.';
  }
  return null;
};
