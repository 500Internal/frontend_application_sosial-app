import type { Profile } from "./profileType";

export type User = {
    id: string;
    email: string;

    profile: Profile

    createdAt: Date;
    updatedAt: Date;
}