import { apiClient } from "shared/helpers/apiClient";
import type { ProfileType } from "shared/types/profileType";

export const getProfile = async (): Promise<{ data: ProfileType }> => {
  return apiClient<{ data: ProfileType }>({
    method: "GET",
    url: "/profiles",
  });
};

export const getProfileByParams = async (paramsId: string): Promise<{ data: ProfileType }> => {
  return apiClient<{ data: ProfileType }>({
    method: "GET",
    url: `/profiles/${paramsId}`,
  });
};

interface UpdateAvatarProfileType {
  avatarImage: File;
}


export const updateAvatarProfile = async (data: UpdateAvatarProfileType) => {
  const formData = new FormData();
  formData.append("avatar", data.avatarImage);
  console.log(data.avatarImage);
  return apiClient({
    method: "PATCH",
    url: "/profiles/avatar",
    data: formData,
  });
};