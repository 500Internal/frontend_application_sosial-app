import React from 'react'

type Props = {
    comments: any
}

export default function NestedComment({ comments }: Props) {
  return (
    <div>
      {comments.map((comment: any) => (
        <div key={comment.id}>
            <p>{comment.comment}</p>
        </div>
      ))}
    </div>
  )
}
