import { Ellipsis } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuLabel, DropdownMenuTrigger } from 'shared/shadcn/dropdown-menu'
import { Separator } from 'shared/shadcn/separator'
import BookmarkButton from '~/features/bookmark/components/bookmarkButton'

export default function DropdownElippsisPostCard() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='p-2 text-white/70'>
        <Ellipsis />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#1a1f25]  rounded-sm border-0 shadow-lg">
        <DropdownMenuLabel className="text-white/60">Actions</DropdownMenuLabel>
        <Separator className="bg-gray-600" />
        <DropdownMenuGroup className="flex flex-col gap-2 p-2">
            <BookmarkButton />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
