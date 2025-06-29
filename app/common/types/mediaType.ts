import type { PostType } from "./postType"

export type MediaType = {
    id:string,
    url:string
    type:string
    postId:string

    post:PostType

    createdAt:string
    updatedAt:string
}