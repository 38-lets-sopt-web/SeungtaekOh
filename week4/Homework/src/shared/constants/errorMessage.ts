export const ERROR_MESSAGE = {
  SIGNUP: {
    ID_TOO_LONG: "아이디는 20자 이하로 입력해주세요.",
    PASSWORD_MISMATCH: "비밀번호가 일치하지 않습니다.",
    PASSWORD_POLICY:
      "비밀번호는 공백없이 8~20자이며 영어, 숫자, 특수문자를 각각 1자 이상 포함해야 합니다.",
    EMAIL_INVALID: "올바른 이메일 형식이 아닙니다.",
    AGE_INVALID: "나이는 숫자로 입력해주세요.",
    NAME_TOO_LONG: "이름은 10자 이하로 입력해주세요.",
  },
  USER: {
    UPDATE_FAILED: "정보 수정에 실패했습니다.",
    SEARCH_INVALID: "회원 ID는 숫자로 입력해주세요.",
  },
} as const;
