import * as styles from "./infoCard.css";

interface InfoCardProps {
  loginId: string;
  part: string;
  name?: string;
  email?: string;
  age?: number;
  nameFirst?: boolean;
}

const InfoCard = ({
  loginId,
  part,
  name,
  email,
  age,
  nameFirst = false,
}: InfoCardProps) => {
  return (
    <div className={styles.container}>
      {nameFirst && name && (
        <div className={styles.row}>
          <span className={styles.label}>이름</span>
          <span className={styles.value}>{name}</span>
        </div>
      )}
      <div className={styles.row}>
        <span className={styles.label}>아이디</span>
        <span className={styles.value}>{loginId}</span>
      </div>
      {!nameFirst && name && (
        <div className={styles.row}>
          <span className={styles.label}>이름</span>
          <span className={styles.value}>{name}</span>
        </div>
      )}
      {email && (
        <div className={styles.row}>
          <span className={styles.label}>이메일</span>
          <span className={styles.value}>{email}</span>
        </div>
      )}
      {age !== undefined && (
        <div className={styles.row}>
          <span className={styles.label}>나이</span>
          <span className={styles.value}>{age}</span>
        </div>
      )}
      <div className={styles.row}>
        <span className={styles.label}>파트</span>
        <span className={styles.value}>{part}</span>
      </div>
    </div>
  );
};

export default InfoCard;
