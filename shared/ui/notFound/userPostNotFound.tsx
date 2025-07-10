import { Ghost } from "lucide-react";

export default function UserPostNotFound() {
  return (
    <div className="mx-auto w-full max-w-md mt-4 bg-[#1d232a] rounded-2xl  p-6 shadow-sm text-center">
      <div className="flex flex-col items-center justify-center">
        <Ghost className="h-12 w-12 text-white/80 mb-3" />
        <h2 className="text-lg text-white font-semibold">Belum ada postingan</h2>
        <p className="text-sm text-white/60">
          User ini belum melakukan post sama sekali.
        </p>
      </div>
    </div>
  );
}
