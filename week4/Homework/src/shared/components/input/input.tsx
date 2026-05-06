import { useState, type InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

import * as styles from "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errorMessage?: string;
}

const Input = ({
  label,
  errorMessage,
  type = "text",
  ...inputProps
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordInput = type === "password";
  const inputType = isPasswordInput && isPasswordVisible ? "text" : type;
  const PasswordIcon = isPasswordVisible ? EyeOff : Eye;

  return (
    <div className={styles.container}>
      <label>{label}</label>

      <div className={styles.inputWrapper}>
        <input className={styles.input} type={inputType} {...inputProps} />

        {isPasswordInput && (
          <button
            className={styles.passwordButton}
            type="button"
            onClick={() => setIsPasswordVisible((prev) => !prev)}
          >
            <PasswordIcon size={18} aria-hidden />
          </button>
        )}
      </div>

      {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
    </div>
  );
};

export default Input;
