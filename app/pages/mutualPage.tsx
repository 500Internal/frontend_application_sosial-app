import React from "react";
import { Button } from "shared/shadcn/button";
import { Card, CardContent } from "shared/shadcn/card";
import DangerModal from "shared/ui/modals/dangerModal";
import { useCreateFollowRequest } from "~/features/followRequest/hooks/useCreateFollowRequest";
import { useGetUserNotFollower } from "~/features/user/hooks/useGetUserNotFollower";

export default function MutualPage() {
  const { data: user } = useGetUserNotFollower();
  const {addFollowRequest} = useCreateFollowRequest();
  return (
    <>
    <DangerModal
      isOpen={false}
      setOpen={() => {}}
      onConfirm={() => {}}
      title="title"
      description="description"
      isLoading={false}
      variant="destructive"
    />
      <div className="flex justify-center items-center py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 px-3">
          {user?.data.map((user) => (
            <Card
              key={user.id}
              className="w-36 bg-[#1f2937]/80 border border-white/10  shadow-md transition rounded-sm duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <CardContent className="flex flex-col rounded-sm items-center p-3">
                <img
                  src={user.profile.avatarImage}
                  alt="avatar"
                  className="w-20 h-20 object-cover rounded-full border-2 border-white/20 shadow-sm"
                />
                <h2 className="text-sm font-medium text-white text-center mt-3 line-clamp-1">
                  {user.profile.name}
                </h2>
                <Button onClick={() => addFollowRequest({receiverId:user.id})} className="w-full text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-3 hover:opacity-90 text-sm py-1.5 rounded-md">
                  Follow
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
