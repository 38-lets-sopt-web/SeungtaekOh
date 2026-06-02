import { api } from "./instance";
import type { UpdateUserRequest, UserIdParam } from "../types/type";
import { END_POINT } from "./end-point";

export const getUser = async (userId: UserIdParam) => {
  return api.get(END_POINT.USER.GET_USER(userId)).json();
};

export const updateUser = async (
  userId: UserIdParam,
  body: UpdateUserRequest,
) => {
  return api.patch(END_POINT.USER.UPDATE_USER(userId), { json: body }).json();
};

export const getUsers = async () => {
  return api.get(END_POINT.USER.GET_USERS).json();
};
