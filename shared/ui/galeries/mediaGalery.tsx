import React from "react";
import type { PostType } from "shared/types/postType";
import GaleryItem1 from "./Item1Galery";
import GaleryItem2 from "./item2Galery";
import GaleryItem3 from "./item3Galery";

type Props = {
  post: PostType;
};

export default function MediaGalery({ post }: Props) {
  const total = post.media.length;

  if (total === 0) return null;

  if (total === 1) return <GaleryItem1 post={post} />;

  if (total > 1 && total <= 4) return <GaleryItem2 post={post} />;

  return <GaleryItem3 post={post} />;
}
