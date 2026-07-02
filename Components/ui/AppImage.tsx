import Image, { type ImageProps } from "next/image";

export type AppImageProps = ImageProps & {
  priority?: boolean;
};

/**
 * Next/Image wrapper with consistent loading defaults:
 * - priority images: eager + high fetch priority
 * - everything else: lazy + auto fetch priority
 */
export default function AppImage({
  priority = false,
  loading,
  fetchPriority,
  ...props
}: AppImageProps) {
  return (
    <Image
      {...props}
      priority={priority}
      loading={loading ?? (priority ? "eager" : "lazy")}
      fetchPriority={fetchPriority ?? (priority ? "high" : "auto")}
    />
  );
}
