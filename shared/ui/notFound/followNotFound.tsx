import { UserMinus } from "lucide-react"

export default function FollowNotFound({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-6 text-center text-muted-foreground">
      <div className="bg-muted p-4 rounded-full mb-4">
        <UserMinus className="h-10 w-10 text-destructive" />
      </div>
      <h2 className="text-lg font-semibold">{message}</h2>
      <p className="text-sm mt-1">Coba ikuti beberapa pengguna untuk mulai terhubung.</p>
    </div>
  )
}
