import { apiClient } from "~/common/helpers/apiClient"
import type { ProfileType } from "~/common/types/profileType"

export const getProfile = async ():Promise<{data:ProfileType}> => {
    return apiClient<{data:ProfileType}>({
        method: "GET",
        url: "/profiles"
    })
}