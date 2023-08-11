import { Link, PressKitSection } from "@/components";
import { Link as LinkProtocol } from "@/domain/protocols";

interface ImagesSectionProps {
  title: string;
  content: LinkProtocol[];
}

const ProjectsSections = ({ title, content }: ImagesSectionProps) => {
  return (
    <PressKitSection title={title} id="projects" noHr>
      <ul>
        {content.map((project) => (
          <li
            key={project.text}
            className="before:inline-block before:w-4 before:text-gray-800 before:content-['•']"
          >
            <Link.Blank href={project.url}>{project.text}</Link.Blank>
          </li>
        ))}
      </ul>
    </PressKitSection>
  );
};

export default ProjectsSections;
