import { apiClient } from "shared/helpers/apiClient";
import type { LoginSchema } from "shared/schemas/authSchema";
import type { UserType } from "shared/types/userType";

export const loginService = async (
  data: LoginSchema
): Promise<{ data: UserType }> => {
  return apiClient<{ data: UserType }>({
    method: "POST",
    url: "/auth/login",
    data,
  });
};

export const getSession = async (): Promise<{ data: UserType }> => {
  return apiClient<{ data: UserType }>({
    method: "GET",
    url: "/auth/session",
  });
};

export const logOut = async (): Promise<void> => {
  return apiClient<void>({
    method: "POST",
    url: "/auth/logout",
  });
};
