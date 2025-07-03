import { apiClient } from "~/common/helpers/apiClient"
import type { LikeType } from "~/common/types/likeType"

export const getLikeByPostId = async (postId:string):Promise<{data:LikeType[]}> => {
    return apiClient<{data:LikeType[]}>({
        method: "GET",
        url: `/likes/${postId}`
    })
}

export const createLike = async (postId:string):Promise<{data:LikeType}> => {
    return apiClient<{data:LikeType}>({
        method: "POST",
        url: `/likes`,
        data: {postId}
    })
}

export const deleteLike = async (likeId:string):Promise<{data:LikeType}> => {
    return apiClient<{data:LikeType}>({
        method: "DELETE",
        url: `/likes/${likeId}`
    })
}