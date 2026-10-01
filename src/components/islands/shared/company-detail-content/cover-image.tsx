/**
 * company-detail-content/cover-image.tsx
 *
 * An optional cover image for a work history entry, rendered only when a URL
 * is provided.
 */

export interface CoverImageProps {
  imageUrl: string;
  companyName: string;
}

export default function CoverImage({
  imageUrl,
  companyName,
}: CoverImageProps): React.ReactElement {
  return (
    <img
      src={imageUrl}
      alt={companyName}
      className="aspect-[16/10] w-full rounded-lg object-cover"
      loading="lazy"
    />
  );
}
