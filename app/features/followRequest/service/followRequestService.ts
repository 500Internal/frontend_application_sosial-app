import { apiClient } from "shared/helpers/apiClient";


interface FollowRequestType {
    receiverId: string;
}

export const createFollowRequest = async (data: FollowRequestType) => {
    return apiClient<void>({
        method: "POST",
        url: "/follow-requests",
        data
    });
}