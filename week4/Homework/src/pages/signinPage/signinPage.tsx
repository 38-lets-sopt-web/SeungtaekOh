import { useState } from "react";
import { useNavigate } from "react-router";

import { signIn } from "../../shared/api/auth";
import Button from "../../shared/components/button/button";
import Input from "../../shared/components/input/input";
import { hasEmptyValue } from "../../shared/utils/validators";
import * as styles from "./singinPage.css";

const SigninPage = () => {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const isLoginButtonDisabled = hasEmptyValue(loginId, password);

  const handleSignin = async () => {
    try {
      const response = (await signIn({ loginId, password })) as {
        data?: {
          userId?: number;
        };
      };

      const userId = response.data?.userId;

      if (!userId) {
        throw new Error("userId가 없습니다.");
      }

      localStorage.setItem("userId", String(userId));
      navigate("/mypage");
    } catch {
      alert("로그인에 실패했습니다.");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SOPT MEMBERS</h1>
      <Input
        label="아이디"
        placeholder="아이디를 입력해주세요."
        value={loginId}
        onChange={(e) => setLoginId(e.currentTarget.value)}
      />

      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번호를 입력해주세요."
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)}
      />
      <Button
        text="로그인"
        guideText="이미 계정이 있나요?"
        linkText="회원가입"
        disabled={isLoginButtonDisabled}
        onClick={handleSignin}
      />
    </div>
  );
};

export default SigninPage;
