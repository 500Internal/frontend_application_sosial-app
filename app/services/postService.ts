import { apiClient } from "~/common/helpers/apiClient"
import type { PostType } from "~/common/types/postType"

interface createPostSchema {
    caption: string
    media:File[]
}

export const createPost = async (data:createPostSchema) => {
    const formData = new FormData()
    formData.append("caption", data.caption)
    if (data.media) {
        for (let i = 0; i < data.media.length; i++) {
            formData.append("media[]", data.media[i])
        }
    }
    return apiClient<{data:PostType}>({
        method: "POST",
        url: "/posts",
        data: formData
    })
}