import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBannerProfile } from "../service/profileService";
import { toast } from "sonner";

export const useUpdateBannerProfile = (paramsId: string,onSuccess: () => void) => {
  const queryClient = useQueryClient();
  const { mutate: updateBanner } = useMutation({
    mutationFn: updateBannerProfile,
    mutationKey: ["updateBanner"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile", paramsId],
      }),
        toast.success("Banner berhasil diubah");
        onSuccess();
    },
  });

  return { updateBanner };
};
