import Button from "../../../shared/components/button/button";
import Input from "../../../shared/components/input/input";
import { ERROR_MESSAGE } from "../../../shared/constants/errorMessage";
import type { SignUpRequest } from "../../../shared/types/type";
import {
  hasEmptyValue,
  isNumeric,
  isOverMaxLength,
  isValidEmail,
} from "../../../shared/utils/validators";
import * as styles from "../signupPage.css";

interface SignupProfileStepProps {
  name: string;
  email: string;
  age: string;
  part: SignUpRequest["part"];
  onChangeName: (name: string) => void;
  onChangeEmail: (email: string) => void;
  onChangeAge: (age: string) => void;
  onChangePart: (part: SignUpRequest["part"]) => void;
  onSubmit: () => void;
}

const SignupProfileStep = ({
  name,
  email,
  age,
  part,
  onChangeName,
  onChangeEmail,
  onChangeAge,
  onChangePart,
  onSubmit,
}: SignupProfileStepProps) => {
  const ageValue = String(age ?? "");

  const isNameTooLong = isOverMaxLength(name, 10);
  const isEmailInvalid = email !== "" && !isValidEmail(email);
  const isAgeInvalid = age !== "" && !isNumeric(age);

  const nameErrorMessage = isNameTooLong
    ? ERROR_MESSAGE.SIGNUP.NAME_TOO_LONG
    : "";

  const emailErrorMessage = isEmailInvalid
    ? ERROR_MESSAGE.SIGNUP.EMAIL_INVALID
    : "";

  const ageErrorMessage = isAgeInvalid ? ERROR_MESSAGE.SIGNUP.AGE_INVALID : "";
  const isSubmitButtonDisabled =
    hasEmptyValue(name, email, ageValue, part) ||
    isNameTooLong ||
    isEmailInvalid ||
    isAgeInvalid;

  return (
    <>
      <Input
        label="이름"
        placeholder="이름을 입력해주세요."
        value={name}
        onChange={(e) => onChangeName(e.currentTarget.value)}
        errorMessage={nameErrorMessage}
      />

      <Input
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요."
        value={email}
        onChange={(e) => onChangeEmail(e.currentTarget.value)}
        errorMessage={emailErrorMessage}
      />

      <Input
        label="나이"
        placeholder="나이를 입력해주세요."
        value={age}
        inputMode="numeric"
        onChange={(e) => onChangeAge(e.currentTarget.value)}
        errorMessage={ageErrorMessage}
      />
      <div className={styles.dropDownContainer}>
        <span>파트</span>
        <select
          className={styles.dropDown}
          value={part}
          onChange={(e) =>
            onChangePart(e.currentTarget.value as SignUpRequest["part"])
          }
        >
          <option value="웹">웹</option>
          <option value="iOS">iOS</option>
          <option value="안드로이드">안드로이드</option>
        </select>
      </div>

      <Button
        text="회원가입"
        disabled={isSubmitButtonDisabled}
        onClick={onSubmit}
      />
    </>
  );
};

export default SignupProfileStep;
