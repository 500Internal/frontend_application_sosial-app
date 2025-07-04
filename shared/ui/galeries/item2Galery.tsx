import React from "react";
import type { PostType } from "shared/types/postType";
import PreviewPostModal from "../modals/previewPostModal";
type Props = {
  post: PostType;
};

export default function GaleryItem2({ post }: Props) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const total = post.media.length;
  return (
    <>
      <div
        className={`grid gap-1 rounded-md overflow-hidden`}
        style={{ gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))` }}
      >
        {post.media.map((media, index) => (
          <div
            key={index}
            className="relative cursor-pointer shadow aspect-square"
            onClick={() => setActiveIndex(index)}
          >
            <img src={media.url} className="w-full h-[300px] object-cover" />
          </div>
        ))}
      </div>
      {activeIndex !== null && (
        <PreviewPostModal
          post={post}
          currentImageIndex={activeIndex}
          onNavigate={(index) => setActiveIndex(index)}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </>
  );
}
