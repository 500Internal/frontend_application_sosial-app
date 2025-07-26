import type { PostType } from "./postType";
import type { UserType } from "./userType";

export type BookmarkType = {
    id: string;
    userId: string;
    postId: string;

    user: UserType;
    post: PostType;

    createdAt: string;
    updatedAt: string;
};
