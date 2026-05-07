import { useEffect, useState } from "react";

import { getUser, updateUser } from "../../../shared/api/user";
import Button from "../../../shared/components/button/button";
import Header from "../../../shared/components/header/header";
import InfoCard from "../../../shared/components/infoCard/infoCard";
import Input from "../../../shared/components/input/input";
import { ERROR_MESSAGE } from "../../../shared/constants/errorMessage";
import type { UpdateUserRequest } from "../../../shared/types/type";
import {
  hasEmptyValue,
  isNumeric,
  isValidEmail,
} from "../../../shared/utils/validators";
import * as styles from "./myInfoPage.css";

interface MyInfo {
  loginId: string;
  name: string;
  email: string;
  age?: number;
  part: string;
}

const MyInfoPage = () => {
  const [myInfo, setMyInfo] = useState<MyInfo>({
    loginId: "",
    name: "",
    email: "",
    age: undefined,
    part: "",
  });
  const [ageInput, setAgeInput] = useState("");

  const isEmailInvalid = myInfo.email !== "" && !isValidEmail(myInfo.email);
  const isAgeInvalid = ageInput !== "" && !isNumeric(ageInput);

  const emailErrorMessage = isEmailInvalid
    ? ERROR_MESSAGE.SIGNUP.EMAIL_INVALID
    : "";

  const ageErrorMessage = isAgeInvalid ? ERROR_MESSAGE.SIGNUP.AGE_INVALID : "";

  const isUpdateButtonDisabled =
    hasEmptyValue(myInfo.name, myInfo.email, ageInput) ||
    isEmailInvalid ||
    isAgeInvalid;

  useEffect(() => {
    const fetchMyInfo = async () => {
      const userId = localStorage.getItem("userId");

      if (!userId) {
        return;
      }

      const response = (await getUser(Number(userId))) as {
        data?: MyInfo;
      };

      if (!response.data) {
        return;
      }

      setMyInfo(response.data);
      setAgeInput(String(response.data.age ?? ""));
    };

    fetchMyInfo();
  }, []);

  const handleUpdateMyInfo = async () => {
    const userId = localStorage.getItem("userId");

    if (!userId) {
      return;
    }

    try {
      const requestBody: UpdateUserRequest = {
        name: myInfo.name,
        email: myInfo.email,
        age: Number(ageInput),
      };

      await updateUser(Number(userId), requestBody);
      alert("정보 수정에 성공했습니다.");
    } catch {
      alert("정보 수정에 실패했습니다.");
    }
  };

  return (
    <div className={styles.page}>
      <Header name={myInfo.name} />
      <main className={styles.content}>
        <h1 className={styles.title}>내 정보</h1>
        <div className={styles.infoCardWrapper}>
          <InfoCard loginId={myInfo.loginId} part={myInfo.part} />
        </div>
        <section className={styles.form}>
          <Input
            label="이름"
            value={myInfo.name}
            onChange={(e) => {
              const value = e.currentTarget.value;
              setMyInfo((prev) => ({ ...prev, name: value }));
            }}
          />
          <Input
            label="이메일"
            value={myInfo.email}
            onChange={(e) => {
              const value = e.currentTarget.value;
              setMyInfo((prev) => ({ ...prev, email: value }));
            }}
            errorMessage={emailErrorMessage}
          />
          <Input
            label="나이"
            value={ageInput}
            inputMode="numeric"
            onChange={(e) => setAgeInput(e.currentTarget.value)}
            errorMessage={ageErrorMessage}
          />
          <Button
            text="정보 수정"
            disabled={isUpdateButtonDisabled}
            onClick={handleUpdateMyInfo}
          />
        </section>
      </main>
    </div>
  );
};

export default MyInfoPage;
