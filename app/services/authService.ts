import { apiClient } from "~/common/helpers/apiClient";
import type { LoginSchema } from "~/common/schema/authSchema";
import type { UserType } from "~/common/types/userType";

export const loginService = async (data:LoginSchema):Promise<{data:UserType}> => {
    return apiClient<{data:UserType}>({
        method: "POST",
        url: "/auth/login",
        data
    })
};

export const getSession = async ():Promise<{data:UserType}> => {
    return apiClient<{data:UserType}>({
        method: "GET",
        url: "/auth/session"
    })
};

export const logOut = async ():Promise<void> => {
    return apiClient<void>({
        method: "POST",
        url: "/auth/logout"
    })
};