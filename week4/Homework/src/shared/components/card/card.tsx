import { Link } from "react-router";

import * as styles from "./card.css";

interface CardProps {
  userId?: number;
  name: string;
  part: string;
}

const card = ({ userId, name, part }: CardProps) => {
  return (
    <Link className={styles.container} to={`/mypage/users/${userId}`}>
      <p className={styles.name}>{name}</p>
      <p className={styles.part}>{part}</p>
    </Link>
  );
};

export default card;
