import { Heading, Section, SectionProps } from "@/components";

type Props = {
  title: string;
  children: React.ReactNode;
};

type PressKitSectionProps = SectionProps & Props;
type PressKitSectionContentProps = React.HTMLAttributes<HTMLDivElement> & Props;

const PressKitSection = ({
  title,
  children,
  ...props
}: PressKitSectionProps): JSX.Element => {
  return (
    <Section
      {...props}
      className={`!mx-0 !mt-0 !items-start !py-14 ${props.className}`}
    >
      <Heading level={2}>{title}</Heading>

      {children}
    </Section>
  );
};

PressKitSection.Content = ({
  children,
  title,
  ...props
}: PressKitSectionContentProps) => {
  return (
    <div>
      <Heading level={3} className="font-sans" {...props}>
        {title}
      </Heading>
      {children}
    </div>
  );
};

export default PressKitSection;
