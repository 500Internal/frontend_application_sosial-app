import { apiClient } from "shared/helpers/apiClient";
import type { FollowerType } from "shared/types/followerType";

export const getFollowingMe = async ():Promise<{data:FollowerType[]}> => {
    return apiClient<{data:FollowerType[]}>({
        method: "GET",
        url: "/followers/following",
    });
}


export const getMyFollowing = async ():Promise<{data:FollowerType[]}> => {
    return apiClient<{data:FollowerType[]}>({
        method: "GET",
        url: "/followers/followed",
    });
}