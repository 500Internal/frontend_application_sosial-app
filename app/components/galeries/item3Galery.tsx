import React from "react";
import type { PostType } from "~/common/types/postType";
import PreviewPostModal from "../modals/previewPostModal";
type Props = {
  post: PostType;
};

export default function GaleryItem3({ post }: Props) {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  //total media
  const total = post.media.length;
  //max media
  const maxVisible = 5;
  // ambil 5 media
  const visibleImages = post.media.slice(0, maxVisible);
  // jumlah media yang tersisa yaitu total - max
  const remaining = total - maxVisible;
  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-1 h-[300px] max-w-xl rounded-md overflow-hidden">
        {/* gambar pertama */}
        {visibleImages[0] && (
          <div
            className="col-span-2 row-span-2"
            onClick={() => setActiveIndex(0)}
          >
            <img
              src={visibleImages[0].url}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {/* gambar ke 2-5 */}
        {visibleImages.slice(1).map((media, index) => (
          <div key={index} className="relative cursor-pointer">
            <img
              src={media.url}
              className="w-full h-full object-cover"
              onClick={() => setActiveIndex(index + 1)}
            />
            {/* kan gambarnya cuma 4 yang diambil untuk gambar keci,l nah 5 - 2 = 3 berati gambar ketiga adalah gambar terakhir */}
            {index === maxVisible - 2 && remaining > 0 && (
              <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center text-white font-semibold">
                +{remaining}
              </div>
            )}
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
