import type { BookmarkType } from "./bookmarkType";
import type { LikeType } from "./likeType";
import type { MediaType } from "./mediaType";
import type { UserType } from "./userType";

export type PostType = {
    id: string;
    caption: string;
    userId: string;
    
    user: UserType;
    media: MediaType[]
    likes: LikeType[]
    bookmarks: BookmarkType[]

    createdAt: string;
    updatedAt: string;
};

export type PostPaginationType = {
    message: string;
    totas_page: number;
    current_page: number;
    perPage: number;
    total: number;
    data: PostType[];
    meta: MetaPostPaginationType
}

export type MetaPostPaginationType = {
    total: number;
    perPage: number;
    currentPage: number;
    lastPage: number;
}