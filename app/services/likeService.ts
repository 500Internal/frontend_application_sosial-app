import { apiClient } from "~/common/helpers/apiClient"
import type { LikeType } from "~/common/types/likeType"

export const getLikeByPostId = async (postId:string):Promise<{data:LikeType[]}> => {
    return apiClient<{data:LikeType[]}>({
        method: "GET",
        url: `/likes/${postId}`
    })
}