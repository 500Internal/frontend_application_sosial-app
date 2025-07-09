import type { UserType } from "./userType"

export type NotificationType = {
    id: string,
    message: string,
    type : 'like' | 'comment' | 'friend_request' | 'comment_reply' | 'accepted_friend_request' | 'rejected_friend_request'
    createdAt: string
    isRead: boolean
    receiverId: string
    senderId: string
    sender:UserType
}