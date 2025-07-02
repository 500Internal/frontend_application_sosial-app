import React from 'react'
import type { PostType } from '~/common/types/postType'
import GaleryItem1 from './galeryItem1'

type Props = {
    post:PostType
}

export default function MediaGalery({post}: Props) {
    const total = post.media.length

    if (total === 0) return null

    if (total === 1) return <GaleryItem1 post={post} />

  return (
    <div>
        sddssd
    </div>
  )
}
