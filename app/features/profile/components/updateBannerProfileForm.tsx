import React from "react";
import UploadImageButton from "shared/ui/button/uploadImageButton";

type Props = {
  handlePreview: (e: React.ChangeEvent<HTMLInputElement>) => void;
  preview?: string;
  bannerImage?: File;
};

const handleUpdateBannerProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
};

export default function UpdateProfileBannerForm({ handlePreview, preview }: Props) {
  return (
    <form>
      <div className="absolute bottom-5 flex items-center gap-8 right-5">
        <UploadImageButton setImage={handlePreview} />
        {preview && (
          <button type="submit" className="bg-blue-400 px-4 py-2 rounded-md">
            Save
          </button>
        )}
      </div>
    </form>
  );
}
