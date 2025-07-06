import React from "react";
import { useParams } from "react-router";
import { AspectRatio } from "shared/shadcn/aspect-ratio";
import { useGetProfile } from "../hooks/useGetProfile";
import { useGetProfileByParams } from "../hooks/useGetProfileByParams";
import BannerSkeleton from "shared/ui/skeletons/bannerSkeleton";
import UpdateAvatarProfileForm from "./updateAvatarProfileForm";
import AvatarBannerProfille from "./avatarBannerProfille";
import UploadImageButton from "shared/ui/button/uploadImageButton";
import UpdateProfileBannerForm from "./updateBannerProfileForm";

export default function BannerProfile() {
  const { profileId } = useParams();
  const { data: profile } = useGetProfile();
  const { data: profileByParams } = useGetProfileByParams(profileId!);
  const [bannerImage, setBannerImage] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);
  //sekeleton
  if (!profile || !profileByParams) return <BannerSkeleton />;

  const handlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setBannerImage(files[0]);
    setPreview(urls[0]);
  };
  return (
    <section className="w-full relative">
      <AspectRatio ratio={16 / 7} className="bg-muted rounded-sm">
        <img
          src={preview ? preview : profile!.data.bannerImage || ""}
          alt="Photo by Drew Beamer"
          loading="lazy"
          className="h-full w-full rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </AspectRatio>
      {profile!.data.userId === profileByParams!.data.userId &&
      profileByParams!.data ? (
          <UpdateAvatarProfileForm profileByParams={profileByParams!.data} />
        ) : (
          <AvatarBannerProfille profileByParams={profileByParams!.data} />
      )}
      {profile!.data.userId === profileByParams!.data.userId &&
      profileByParams!.data ? (
        <UpdateProfileBannerForm bannerImage={bannerImage ?? undefined} handlePreview={(e) => handlePreview(e)} preview={preview || ""} />
      ) : null}
    </section>
  );
}
