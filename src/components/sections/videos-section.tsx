import { Iframe, PressKitSection } from "@/components";
import { Link } from "@/domain/protocols";

interface VideosSectionProps {
  title: string;
  content: Link[];
  lazy?: boolean;
}

const VideosSection = ({ title, content, lazy }: VideosSectionProps) => {
  return (
    <PressKitSection id="videos" title={title}>
      <div className="grid w-full grid-cols-1 gap-16 md:grid-cols-2 2xl:grid-cols-3">
        {content.map((video) => (
          <PressKitSection.Content
            className="mb-2 font-sans text-base"
            title={video.text}
            key={video.url}
          >
            <Iframe
              loading={lazy ? "lazy" : "eager"}
              title={video.text}
              src={video.url}
            />
          </PressKitSection.Content>
        ))}
      </div>
    </PressKitSection>
  );
};
export default VideosSection;
