import { Bookmark } from 'lucide-react'
import React from 'react'

export default function BookmarkButton() {
  return (
    <button className="flex p-1 rounded hover:bg-amber-50/25 items-center gap-2">
        <Bookmark size={25} className={`text-white/60`} />
    </button>
  )
}
