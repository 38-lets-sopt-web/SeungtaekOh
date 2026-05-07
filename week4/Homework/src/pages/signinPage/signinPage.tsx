import Button from "../../shared/components/button/button";
import Input from "../../shared/components/input/input";
import * as styles from "./singinPage.css";

const signinPage = () => {
  return (
    <div className={styles.container}>
      <Input label="이름" type="password" />
      <Button text="다음" guideText="이미 계정이 있나요?" linkText="로그인" />
    </div>
  );
};

export default signinPage;
