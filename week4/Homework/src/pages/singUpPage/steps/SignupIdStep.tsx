import Button from "../../../shared/components/button/button";
import Input from "../../../shared/components/input/input";
import { ERROR_MESSAGE } from "../../../shared/constants/errorMessage";
import { isEmpty, isOverMaxLength } from "../../../shared/utils/validators";

interface SignupIdStepProps {
  loginId: string;
  onChangeLoginId: (loginId: string) => void;
  onNext: () => void;
}

const SignupIdStep = ({
  loginId,
  onChangeLoginId,
  onNext,
}: SignupIdStepProps) => {
  const isLoginIdTooLong = isOverMaxLength(loginId, 20);
  const idErrorMessage = isLoginIdTooLong
    ? ERROR_MESSAGE.SIGNUP.ID_TOO_LONG
    : "";
  const isNextButtonDisabled = isEmpty(loginId) || isLoginIdTooLong;

  return (
    <>
      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요."
        value={loginId}
        onChange={(e) => onChangeLoginId(e.currentTarget.value)}
        errorMessage={idErrorMessage}
      />
      <Button text="다음" disabled={isNextButtonDisabled} onClick={onNext} />
    </>
  );
};

export default SignupIdStep;
