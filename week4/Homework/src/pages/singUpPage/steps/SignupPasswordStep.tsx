import Button from "../../../shared/components/button/button";
import Input from "../../../shared/components/input/input";
import { ERROR_MESSAGE } from "../../../shared/constants/errorMessage";
import {
  hasEmptyValue,
  isSamePassword,
  isValidPassword,
} from "../../../shared/utils/validators";

interface SignupPasswordStepProps {
  password: string;
  passwordConfirm: string;
  onChangePassword: (password: string) => void;
  onChangePasswordConfirm: (passwordConfirm: string) => void;
  onNext: () => void;
}

const SignupPasswordStep = ({
  password,
  passwordConfirm,
  onChangePassword,
  onChangePasswordConfirm,
  onNext,
}: SignupPasswordStepProps) => {
  const isPasswordMismatch =
    passwordConfirm !== "" && !isSamePassword(password, passwordConfirm);

  const isPasswordInvalid = password !== "" && !isValidPassword(password);

  const passwordErrorMessage = isPasswordInvalid
    ? ERROR_MESSAGE.SIGNUP.PASSWORD_POLICY
    : "";

  const passwordConfirmErrorMessage = isPasswordMismatch
    ? ERROR_MESSAGE.SIGNUP.PASSWORD_MISMATCH
    : "";

  const isNextButtonDisabled =
    hasEmptyValue(password, passwordConfirm) ||
    isPasswordInvalid ||
    isPasswordMismatch;

  return (
    <>
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={(e) => onChangePassword(e.currentTarget.value)}
        errorMessage={passwordErrorMessage}
      />

      <Input
        label="비밀번호 확인"
        type="password"
        placeholder="비밀번호를 다시 입력해주세요."
        value={passwordConfirm}
        onChange={(e) => onChangePasswordConfirm(e.currentTarget.value)}
        errorMessage={passwordConfirmErrorMessage}
      />

      <Button
        text="다음"
        guideText="이미 계정이 있나요?"
        linkText="로그인"
        disabled={isNextButtonDisabled}
        onClick={onNext}
      />
    </>
  );
};

export default SignupPasswordStep;
