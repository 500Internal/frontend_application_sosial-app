import React from "react";
import type { PostType } from "~/common/types/postType";
import PreviewPostModal from "../modals/previewPostModal";
type Props = {
  post: PostType;
};

export default function GaleryItem1({ post }: Props) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  return (
    <>
      {post.media.map((media, index) => (
        <div
          key={index}
          className="relative cursor-pointer"
          onClick={() => setActiveIndex(index)}
        >
          <img src={media.url}  className="w-full h-[300px] rounded-md object-cover" />
        </div>
      ))}
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
