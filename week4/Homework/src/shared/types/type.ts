import type { paths } from "./schema";

export type SignUpRequest =
  paths["/api/v1/auth/signup"]["post"]["requestBody"]["content"]["application/json"];

export type SignInRequest =
  paths["/api/v1/auth/signin"]["post"]["requestBody"]["content"]["application/json"];

export type UpdateUserRequest =
  paths["/api/v1/users/{userId}"]["patch"]["requestBody"]["content"]["application/json"];

export type UserIdParam =
  paths["/api/v1/users/{userId}"]["get"]["parameters"]["path"]["userId"];
