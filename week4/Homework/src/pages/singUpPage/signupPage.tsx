import { useState } from "react";
import { useNavigate } from "react-router";

import { signUp } from "../../shared/api/auth";
import type { SignUpRequest } from "../../shared/types/type";
import SignupIdStep from "./steps/SignupIdStep";
import * as styles from "./signupPage.css";
import SignupPasswordStep from "./steps/SignupPasswordStep";
import SignupProfileStep from "./steps/SignupProfileStep";

type SignupStep = "id" | "password" | "profile";

const POST_SIGNUP_FORM: SignUpRequest = {
  loginId: "",
  password: "",
  name: "",
  email: "",
  age: undefined,
  part: "웹",
};

const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<SignupStep>("id");
  const [signupForm, setSignupForm] = useState<SignUpRequest>(POST_SIGNUP_FORM);
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [ageInput, setAgeInput] = useState("");

  const updateSignupForm = (updates: Partial<SignUpRequest>) => {
    setSignupForm((prev) => ({
      ...prev,
      ...updates,
    }));
  };

  const handleSignup = async () => {
    try {
      const requestBody: SignUpRequest = {
        ...signupForm,
        age: Number(ageInput),
      };

      await signUp(requestBody);
      alert(`${signupForm.name}님 회원가입이 완료되었습니다.`);
      navigate("/signin");
    } catch {
      alert("회원가입에 실패했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>

      {step === "id" && (
        <SignupIdStep
          loginId={signupForm.loginId}
          onChangeLoginId={(loginId) => updateSignupForm({ loginId })}
          onNext={() => setStep("password")}
        />
      )}

      {step === "password" && (
        <SignupPasswordStep
          password={signupForm.password}
          passwordConfirm={passwordConfirm}
          onChangePassword={(password) => updateSignupForm({ password })}
          onChangePasswordConfirm={setPasswordConfirm}
          onNext={() => setStep("profile")}
        />
      )}

      {step === "profile" && (
        <SignupProfileStep
          name={signupForm.name}
          email={signupForm.email}
          age={ageInput}
          part={signupForm.part}
          onChangeName={(name) => updateSignupForm({ name })}
          onChangeEmail={(email) => updateSignupForm({ email })}
          onChangeAge={setAgeInput}
          onChangePart={(part) => updateSignupForm({ part })}
          onSubmit={handleSignup}
        />
      )}
    </div>
  );
};

export default SignupPage;
