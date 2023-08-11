import { Image, Link, PressKitSection } from "@/components";
import {
  Image as ImageProtocol,
  Link as LinkProtocol,
} from "@/domain/protocols";

interface ImagesSectionProps {
  id: string;
  title: string;
  zipDownload: LinkProtocol;
  content: ImageProtocol[];
  lazy?: boolean;
}

const ImagesSection = ({
  id,
  title,
  zipDownload,
  content,
  lazy,
}: ImagesSectionProps) => {
  return (
    <PressKitSection id={id} title={title} className="gap-4">
      <Link.Download href={zipDownload.url}>{zipDownload.text}</Link.Download>
      <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 2xl:grid-cols-3">
        {content.map((image) => (
          <Image
            key={image.url}
            loading={lazy ? "lazy" : "eager"}
            src={image.url}
            alt={image.alt}
          />
        ))}
      </div>
    </PressKitSection>
  );
};

export default ImagesSection;
