import { createCookie } from "react-router";
import { apiClient } from "shared/helpers/apiClient";
import type { BookmarkType } from "shared/types/bookmarkType";

export const createPostBookmark = async (postId: string) => {
    return apiClient<void>({
        method: "POST",
        url: "/bookmarks",
        data: { postId },
    });
};

export const deletePostBookmark = async (bookmarkId: string) => {
    return apiClient<void>({
        method: "DELETE",
        url: `/bookmarks/${bookmarkId}`,
    });
};

export const getBookmarkByPostId = async (postId: string):Promise<{data:BookmarkType}> => {
    return apiClient<{data:BookmarkType}>({
        method: "GET",
        url: `/bookmarks/post/${postId}`,
    });
}

export const getBookmark = async ():Promise<{data:BookmarkType[]}> => {
    return apiClient<{data:BookmarkType[]}>({
        method: "GET",
        url: "/bookmarks",
    });
}