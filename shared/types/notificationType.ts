import type { UserType } from "./userType"

export type NotificationType = {
    id: string,
    message: string,
    createdAt: string
    receiverId: string
    senderId: string
    sender:UserType
}