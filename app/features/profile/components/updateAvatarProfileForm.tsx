import React from "react";
import type { ProfileType } from "shared/types/profileType";
import AvatarBannerProfille from "./avatarBannerProfille";
import UploadImageButton from "shared/ui/button/uploadImageButton";
import { useUpdateAvatarProfile } from "../hooks/useUpdateAvatarProfile";
type Props = {
  profileByParams: ProfileType;
};
export default function UpdateAvatarProfileForm({ profileByParams }: Props) {
  const [uploadAvatar, setUploadAvatar] = React.useState<File>();
  const [preview, setPreview] = React.useState<File | string>();
  const {updateAvatar} = useUpdateAvatarProfile(profileByParams.id);

  // handle preview untuk ambil file yang di upload dari input onChange
  const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setUploadAvatar(files[0]);
    setPreview(urls[0]);
  };

  // handle remove preview untuk menghapus preview file
  const handleRemovePreview = () => {
    setUploadAvatar(undefined);
    setPreview(undefined);
  };

  // handle update profile
  const handleUpdateAvatarProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!uploadAvatar) return;
    updateAvatar({ avatarImage: uploadAvatar });
  };

  return (
    <form onSubmit={handleUpdateAvatarProfile} className="flex relative">
      <AvatarBannerProfille
        profilePreview={preview as string}
        profileByParams={profileByParams}
      />
      <div className="flex absolute bottom-3 left-36">
        {uploadAvatar ? (
          <div className="flex">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Simpan
            </button>
            <button
              type="button"
              onClick={handleRemovePreview}
              className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
            >
              Hapus
            </button>
          </div>
        ) : (
          <UploadImageButton setImage={handlePreview} />
        )}
      </div>
    </form>
  );
}
