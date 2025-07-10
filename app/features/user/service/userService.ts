import { apiClient } from "shared/helpers/apiClient";
import type { UserType } from "shared/types/userType";

export const getUserNotFollower = async (): Promise<{ data: UserType[] }> => {
    return apiClient<{ data: UserType[] }>({
        method: "GET",
        url: "/users/not-follower",
    });
}