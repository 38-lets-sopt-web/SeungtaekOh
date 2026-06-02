//입력창이 비었는지
export const isEmpty = (value: string) => {
  return value.trim() === "";
};
//입력창s들이 비었는지
export const hasEmptyValue = (...values: string[]) => {
  return values.some((value) => isEmpty(value));
};
//아이디 20글자 넘었는지
export const isOverMaxLength = (value: string, maxLength: number) => {
  return value.length > maxLength;
};
//비밀번호랑 비밀번호 확인이 같은지
export const isSamePassword = (password: string, passwordConfirm: string) => {
  return password === passwordConfirm;
};
//비밀번호 정책
export const isValidPassword = (password: string) => {
  const hasValidLength = password.length >= 8 && password.length <= 20;
  const hasEnglish = /[A-Za-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecial = /[^A-Za-z0-9\s]/.test(password);
  const hasNoSpace = !/\s/.test(password);

  return hasValidLength && hasEnglish && hasNumber && hasSpecial && hasNoSpace;
};
//이메일 형식 맞는지
export const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
//나이 숫자 맞는지
export const isNumeric = (value: string) => {
  return /^\d+$/.test(value);
};
