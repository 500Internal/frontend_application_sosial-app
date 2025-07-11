import { BriefcaseBusiness } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "shared/shadcn/avatar";
import { Card, CardContent } from "shared/shadcn/card";
import { Separator } from "shared/shadcn/separator";
import type { FollowerType } from "shared/types/followerType";

type Props = {
  following: FollowerType[];
};

export default function FollowingListCard({ following }: Props) {
  return (
    <>
      {following.map((following) => (
        <div className="flex mt-4 flex-col gap-2">
          <div className="flex gap-4">
            <Avatar className="w-15 h-15 object-cover rounded-full border-2 border-white/20 shadow-sm">
              <AvatarImage src={following.following.profile.avatarImage} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex gap-1 flex-col">
              <h3 className="text-md font-medium text-white">Siam</h3>
              <p className="text-sm text-left whitespace-pre-wrap break-words break-all line-clamp-1  text-white/60">
                bio siam
              </p>
              <div className="flex items-center gap-2">
                <BriefcaseBusiness className="h-5 w-5 text-white/60" />
                <span className="text-sm text-white/60">Company</span>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-600" />
        </div>
      ))}
    </>
  );
}
