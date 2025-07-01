import { apiClient } from "~/common/helpers/apiClient";

export const loginService = async () => {
    return apiClient({
        method: "POST",
        url: "/auth/login",
    })
};