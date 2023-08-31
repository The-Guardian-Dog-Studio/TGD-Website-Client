import { Link, PressKitSection } from "@/components";
import { Collaborator } from "@/domain/protocols";

interface TeamSectionProps {
  title: string;
  content: Collaborator[];
  className?: string;
}

const TeamSection = ({ title, content, className }: TeamSectionProps) => {
  return (
    <PressKitSection
      id="team"
      hr={{ className: "lg:hidden block col-start-1 col-end-3" }}
      title={title}
      className={className}
    >
      {content.map((person) => (
        <PressKitSection.Content title={person.name} key={person.name}>
          <p>{person.role}</p>
          <nav>
            <ul>
              {person.connect !== undefined &&
                person.connect.map((socialMedia) => (
                  <li key={`${socialMedia.name} ${person.name}`}>
                    <Link.Blank noPrefix href={socialMedia.link}>
                      {socialMedia.name}
                    </Link.Blank>
                  </li>
                ))}
            </ul>
          </nav>
        </PressKitSection.Content>
      ))}
    </PressKitSection>
  );
};

export default TeamSection;
