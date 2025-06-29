import type { User } from "./userType"

export type Profile = {
    id: number
    avatarImage: string
    bannerImage: string
    name: string
    bio: string
    negara: string
    kota: string
    pekerjaan: string
    website: string
    
    createdAt: string
    updatedAt: string

    userId: string
    user:User

}