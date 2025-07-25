import { useQuery } from "@tanstack/react-query";
import { apiClient } from "shared/helpers/apiClient";
import type { CommentType } from "shared/types/commentType";

type createRootCommentType = {
    postId: string;
    comment: string;
    receiverId: string
}

export const createRootComment = async (data: createRootCommentType) => {
    return apiClient<void>({
        method: "POST",
        url: "/comments/root",
        data
    });
};


type createReplyCommentType = {
    commentId: string;
    comment: string;
    postId: string
    receiverId: string
}

export const createReplyComment = async (data: createReplyCommentType) => {
    return apiClient<void>({
        method: "POST",
        url: "/comments/reply",
        data
    });
};

export const getCommentsCount= async (postId: string): Promise<{ data: number }> => {
  return apiClient<{ data: number }>({
    method: "GET",
    url: `/comments/count/${postId}`,
  });
};

export const getNestedComments = async (postId: string): Promise<{ data:CommentType[]  }> => {
  return apiClient<{ data: CommentType[] }>({
    method: "GET",
    url: `/comments/${postId}`,
  });
}