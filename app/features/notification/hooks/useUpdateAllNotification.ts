import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAllNotifications } from "../service/notificationService";
import { toast } from "sonner";

export const useUpdateAllNotification = (onSuccess: () => void) => {
  const queryClient = useQueryClient();
  const {
    mutate: updateAllNotification,
    isPending: isPendingUpdateNotification,
  } = useMutation({
    mutationFn: updateAllNotifications,
    onSuccess: () => {
      toast.success("Notifikasi berhasil dibaca");
      queryClient.invalidateQueries({ queryKey: ["allNotifications"] });
      queryClient.invalidateQueries({ queryKey: ["someNotifications"] });
      queryClient.invalidateQueries({ queryKey: ["notificationUnread"] });
      onSuccess();
    },
    onError: () => {
      toast.error("Notifikasi gagal dibaca");
    },
    mutationKey: ["updateAllNotifications"],
  });

  return { updateAllNotification, isPendingUpdateNotification };
};
