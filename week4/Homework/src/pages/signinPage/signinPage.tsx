import Button from "../../shared/components/button/button";
import Input from "../../shared/components/input/input";
import * as styles from "./singinPage.css";

const signinPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SOPT MEMBERS</h1>
      <Input label="아이디" placeholder="아이디를 입력해주세요" />
      <Input
        label="비밀번호"
        type="password"
        placeholder="비밀번홀를 입력해주세요"
      />
      <Button text="로그인" guideText="이미 계정이 있나요?" linkText="로그인" />
    </div>
  );
};

export default signinPage;
