import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateAllNotifications } from "../service/notificationService"
import { toast } from "sonner"

export const useUpdateAllNotification = () => {
    const queryClient = useQueryClient()
    const {mutate: updateAllNotification}=useMutation({
        mutationFn: updateAllNotifications,
        onSuccess: () => {
            toast.success("Notifikasi berhasil dibaca");
            queryClient.invalidateQueries({
                queryKey: ["allNotifications"],
            });
        },
        onError: () => {
            toast.error("Notifikasi gagal dibaca");
        },
        mutationKey: ["updateAllNotifications"],
    })

    return {updateAllNotification}
}