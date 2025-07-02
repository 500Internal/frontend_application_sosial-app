import React from "react";
import type { PostType } from "~/common/types/postType";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowBigLeft, ArrowBigRight, CircleX } from "lucide-react";

type Props = {
  post: PostType;
  onClose: () => void;
  currentImageIndex: number;
  onNavigate: (index: number) => void;
};

export default function PreviewPostModal({
  post,
  currentImageIndex,
  onNavigate,
  onClose,
}: Props) {
  const image = post.media[currentImageIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-red-400 z-10"
        >
          <CircleX className="w-8 h-8" />
        </button>

        {/* Prev image button */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 z-10"
          disabled={currentImageIndex === 0}
          onClick={() => onNavigate(currentImageIndex - 1)}
        >
          <ArrowBigLeft className="w-10 h-10" />
        </button>

        {/* Next image button */}
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-400 z-10"
          disabled={currentImageIndex === post.media.length - 1}
          onClick={() => onNavigate(currentImageIndex + 1)}
        >
          <ArrowBigRight className="w-10 h-10" />
        </button>

        {/* Gambar */}
        <img
          src={image.url}
          alt=""
          className="max-w-[90vw] max-h-[90vh] object-contain rounded"
        />
      </motion.div>
    </AnimatePresence>
  );
}
