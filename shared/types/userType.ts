import type { LikeType } from "./likeType";
import type { PostType } from "./postType";
import type { ProfileType } from "./profileType";

export type UserType = {
    id: string;
    email: string;

    profile: ProfileType
    post: PostType[]
    like: LikeType[]
    
    createdAt: Date;
    updatedAt: Date;
}