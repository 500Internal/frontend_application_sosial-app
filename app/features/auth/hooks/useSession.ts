import { useQuery } from "@tanstack/react-query";
import { getSession } from "../service/authService";

export const useSession = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: getSession,
  });
};