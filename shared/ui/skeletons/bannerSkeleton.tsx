// components/skeletons/skeleton-banner-profile.tsx
import { AspectRatio } from "shared/shadcn/aspect-ratio";
import { Skeleton } from "shared/shadcn/skeleton";

export default function BannerSkeleton() {
  return (
    <section className="w-full relative">
      <AspectRatio ratio={16 / 7} className="bg-muted rounded-sm overflow-hidden">
        <Skeleton className="w-full h-full rounded-lg" />
      </AspectRatio>

      <div className="absolute bottom-[-32px] left-4">
        <Skeleton className="w-20 h-20 rounded-full" />
      </div>
    </section>
  );
}
