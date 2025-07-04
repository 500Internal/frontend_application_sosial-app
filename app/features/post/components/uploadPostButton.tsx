import React from "react";
import { Input } from "shared/shadcn/input";
import { Label } from "shared/shadcn/label";
import { FaImages } from "react-icons/fa";
export type UploadImageButtonProps = {
  setImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function UploadPostButton({ setImage }: UploadImageButtonProps) {
  return (
    <div>
      <Label className="relative">
        <Input className="hidden" type="file" multiple onChange={setImage} />
        <FaImages className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-400 text-4xl" />
      </Label>
    </div>
  );
}
