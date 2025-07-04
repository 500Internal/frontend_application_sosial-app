import React from "react";
import { Button } from "shared/shadcn/button";
import { Input } from "shared/shadcn/input";
import { Separator } from "shared/shadcn/separator";
import UploadPostButton from "./uploadPostButton";
import { Trash } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createPost } from "~/features/post/service/postService";
import { toast } from "sonner";
import { useCreatePost } from "../hooks/useCreatePost";

export default function CreatePostForm() {
  const [caption, setCaption] = React.useState<string>("");
  const [preview, setPreview] = React.useState<string[]>([]);
  const [media, setMedia] = React.useState<File[]>([]); // array file

  const handleRemovePreview = (index: number) => {
    // remove preview
    const newPreview = [...preview];
    newPreview.splice(index, 1);
    setPreview(newPreview);

    // remove media
    const newMedia = [...media!];
    newMedia.splice(index, 1);
    setMedia(newMedia);
  };

  const hadlePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const urls = Array.from(files).map((file) => URL.createObjectURL(file));
    setPreview(urls);
    // media jadi array file
    setMedia(Array.from(files));
  };

  // create post
  const { isPending, mutate } = useCreatePost(() => {
    // reset
    setCaption("");
    setPreview([]);
    setMedia([]);
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // create post lewat service dengan mutate
    mutate({ caption, media: media?.length ? media : [] });
  };

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={onSubmit}>
        <div className="flex items-center gap-3">
          <img src="/logo-v1.webp" alt="logo" className="h-12 w-12" />
          <Input
            type="text"
            placeholder="Apa yang ada di pikiranmu ?"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="text-white focus-visible:ring-1 focus-visible:ring-purple-600  bg-[#15191d] h-10 "
          />
        </div>
        {preview.map((image, index) => (
          <div key={index} className="relative h-48 w-full">
            <img
              src={image}
              className="w-full h-full object-cover"
              alt="preview"
            />
            <Button
              variant="destructive"
              className="absolute top-2 right-2"
              onClick={() => handleRemovePreview(index)}
            >
              <Trash />
            </Button>
          </div>
        ))}
        <Separator orientation="horizontal" className="bg-gray-600" />
        <div className="flex items-center justify-between px-4">
          <UploadPostButton
            setImage={(e) => {
              hadlePreview(e);
            }}
          />
          <Button
            type="submit"
            className="bg-purple-600 text-white hover:bg-purple-700"
            disabled={isPending}
          >
            Post
          </Button>
        </div>
      </form>
    </>
  );
}
