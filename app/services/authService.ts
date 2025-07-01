import { apiClient } from "~/common/helpers/apiClient";
import type { LoginSchema } from "~/common/schema/authSchema";

export const loginService = async (data:LoginSchema) => {
    return apiClient({
        method: "POST",
        url: "/auth/login",
        data
    })
};