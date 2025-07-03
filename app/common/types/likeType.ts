import type { PostType } from "./postType";
import type { UserType } from "./userType";

export type LikeType = {
    id: string;
    userId: string;
    postId: string;
    createdAt: string;
    updatedAt: string;

    user: UserType
    post: PostType
};