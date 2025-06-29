import type { MediaType } from "./mediaType";
import type { UserType } from "./userType";

export type PostType = {
    id: string;
    caption: string;
    content: string;
    userId: string;
    
    user: UserType;
    media: MediaType[]
    
    createdAt: string;
    updatedAt: string;
};