import type { UserType } from "./userType"

export type ProfileType = {
    id: string
    avatarImage: string
    bannerImage: string
    name: string
    bio: string
    negara: string
    kota: string
    pekerjaan: string
    website: string
    userId: string
    
    createdAt: string
    updatedAt: string

    user:UserType

}