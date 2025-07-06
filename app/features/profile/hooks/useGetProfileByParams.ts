import { useQuery } from "@tanstack/react-query";
import { getProfileByParams } from "../service/profileService";

export const useGetProfileByParams = (paramsId: string) => {
    return useQuery({
        queryKey: ["profile", paramsId],
        queryFn: () => getProfileByParams(paramsId),
    });
};