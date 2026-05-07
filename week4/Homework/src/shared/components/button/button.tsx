import type { ButtonHTMLAttributes } from "react";
import { Link } from "react-router";

import * as styles from "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  guideText?: string;
  linkText?: string;
}

const button = ({ text, guideText, linkText }: ButtonProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>{text}</button>
      <div className={styles.linkGuide}>
        {guideText}
        <Link className={styles.link} to={"/singin"}>
          {linkText}
        </Link>
      </div>
    </div>
  );
};

export default button;
