import { UserX } from "lucide-react";
import React from "react";

export default function UserNotFound({
  message = "User not found",
}: {
  message?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
      <div className="bg-muted p-4 rounded-full mb-4">
        <UserX  className="h-10 w-10 text-destructive" />
      </div>
      <h2 className="text-lg font-semibold">{message}</h2>
      <p className="text-sm mt-1">Coba periksa kembali atau cari yang lain.</p>
    </div>
  );
}
