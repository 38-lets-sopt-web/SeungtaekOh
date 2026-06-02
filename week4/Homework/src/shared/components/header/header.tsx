import { Link, useNavigate } from "react-router";

import * as styles from "./header.css";

interface HeaderProps {
  name: string;
}

const Header = ({ name }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/signin");
  };

  return (
    <div className={styles.container}>
      <div className={styles.brandArea}>
        <p className={styles.title}>SOPT MEMBERS</p>
        <p className={styles.greeting}>안녕하세요, {name}님!</p>
      </div>
      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/mypage">
          내 정보
        </Link>
        <Link className={styles.navLink} to="/mypage/users">
          회원 조회
        </Link>
        <button
          className={styles.logoutButton}
          type="button"
          onClick={handleLogout}
        >
          로그아웃
        </button>
      </nav>
    </div>
  );
};

export default Header;
