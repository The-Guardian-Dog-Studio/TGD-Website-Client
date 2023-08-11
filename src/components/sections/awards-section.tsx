import { PressKitSection, Quote } from "@/components";

interface AwardsSectionProps {
  title: string;
  content: string[];
}

const AwardsSection = ({ title, content }: AwardsSectionProps): JSX.Element => {
  return (
    <PressKitSection id="awards-and-recognition" title={title}>
      <ul>
        {content.map((award) => (
          <li key={award} className="ml-4 md:ml-8">
            <Quote text={award} />
          </li>
        ))}
      </ul>
    </PressKitSection>
  );
};

export default AwardsSection;
