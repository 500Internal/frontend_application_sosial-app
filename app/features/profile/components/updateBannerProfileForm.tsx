import React from "react";
import UploadImageButton from "shared/ui/button/uploadImageButton";
import { useUpdateBannerProfile } from "../hooks/useUpdateBannerProfile";

type Props = {
  handlePreview: (e: React.ChangeEvent<HTMLInputElement>) => void;
  preview?: string;
  bannerImage?: File;
  paramsId?: string;
  handleRemovePreview?: () => void;
};

export default function UpdateProfileBannerForm({
  handlePreview,
  preview,
  paramsId,
  bannerImage,
  handleRemovePreview,
}: Props) {
  const { updateBanner } = useUpdateBannerProfile(paramsId!, () => {
    handleRemovePreview!();
  });
  const handleUpdateBannerProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!preview) return;
    updateBanner({ bannerImage: bannerImage! });
  };
  return (
    <form onSubmit={(e) => handleUpdateBannerProfile(e)}>
      <div className="absolute bottom-5 flex items-center gap-8 right-5">
        {preview ? (
          <div className="flex items-center gap-4">
            <button type="submit" className="bg-blue-400 px-4 py-2 rounded-md">
              Save
            </button>
            <button
              onClick={handleRemovePreview}
              className="bg-red-400 px-4 py-2 rounded-md"
            >
              Remove
            </button>
          </div>
        ) : (
          <UploadImageButton setImage={handlePreview} />
        )}
      </div>
    </form>
  );
}
