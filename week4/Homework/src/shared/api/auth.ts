import { api } from "./instance";
import type { SignInRequest, SignUpRequest } from "../types/type";
import { END_POINT } from "./end-point";

export const signUp = async (body: SignUpRequest) => {
  return api.post(END_POINT.AUTH.SIGNUP, { json: body }).json();
};

export const signIn = async (body: SignInRequest) => {
  return api.post(END_POINT.AUTH.SIGNIN, { json: body }).json();
};
