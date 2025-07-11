import type { UserType } from "./userType";

export type FollowerType = {
    id: string;
    followerId: string;
    followingId: string;

    follower: UserType;
    following: UserType;

    createdAt: string;
    updatedAt: string;
};