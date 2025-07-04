import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../service/profileService";

export const useGetProfile = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: getProfile,
    });
};