export const END_POINT = {
  AUTH: {
    SIGNUP: "/api/v1/auth/signup",
    SIGNIN: "/api/v1/auth/signin",
  },
  USER: {
    GET_USER: (userId: number) => `/api/v1/users/${userId}`,
    UPDATE_USER: (userId: number) => `/api/v1/users/${userId}`,
    GET_USERS: "/api/v1/users",
  },
} as const;
