import { useState } from "react";
import Button from "../../shared/components/button/button";
import Input from "../../shared/components/input/input";
import * as styles from "./singinPage.css";
import { hasEmptyValue } from "../../shared/utils/validators";

const SigninPage = () => {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const isLoginButtonDisabled = hasEmptyValue(loginId, password);
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
        linkText="로그인"
        disabled={isLoginButtonDisabled}
      />
    </div>
  );
};

export default SigninPage;
