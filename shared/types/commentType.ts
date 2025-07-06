import type { UserType } from "./userType";

export type CommentType = {
  id: string;
  comment: string;
  userId: string;
  postId: string;
  parentId: string | null;
  createdAt: string;
  updatedAt: string;
  user: UserType;
  replies: CommentType[]; // nested replies
};