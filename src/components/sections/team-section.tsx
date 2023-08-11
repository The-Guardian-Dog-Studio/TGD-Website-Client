import { PressKitSection } from "@/components";

interface TeamSectionProps {
  title: string;
  content: {
    name: string;
    role: string;
  }[];
}

const TeamSection = ({ title, content }: TeamSectionProps) => {
  return (
    <PressKitSection
      id="team"
      hr={{ className: "lg:hidden block col-start-1 col-end-3" }}
      title={title}
    >
      {content.map((person) => (
        <PressKitSection.Content title={person.name} key={person.name}>
          <p>{person.role}</p>
        </PressKitSection.Content>
      ))}
    </PressKitSection>
  );
};

export default TeamSection;
