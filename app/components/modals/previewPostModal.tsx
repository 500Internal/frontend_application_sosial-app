import React from "react";
import type { PostType } from "~/common/types/postType";
import { AnimatePresence,motion } from "framer-motion";

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
      
      className="flex items-center bg-black/70 fixed justify-center inset-0 z-50">
        <img src={image.url} alt="" />
      </motion.div>
    </AnimatePresence>
  );
}
