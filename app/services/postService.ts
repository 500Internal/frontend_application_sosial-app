import { apiClient } from "~/common/helpers/apiClient"
import type { PostType } from "~/common/types/postType"

interface createPostSchema {
    caption: string
    media:File[]
}

export const createPost = async (data:createPostSchema) => {
    // buat form data karena ada media/gambar
    const formData = new FormData()
    formData.append("caption", data.caption)
    // karena media berupa array file maka perlu looping
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