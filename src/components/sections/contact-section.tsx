import { Heading, Link, Section } from "@/components";
import { ContactData } from "@/domain/protocols";

interface ContactSectionProps {
  contactData: {
    title: string;
    data: ContactData;
  };
}

const ContactSection = ({ contactData }: ContactSectionProps): JSX.Element => {
  return (
    <Section id="contact" className="gap-16">
      <Heading level={1}>{contactData.title}</Heading>
      <div>
        <ul className="flex flex-wrap justify-around gap-8 md:gap-16">
          {contactData.data.map((item) => (
            <li key={item.email} className="flex flex-col justify-center gap-1">
              <Heading
                level={3}
                className="text-center font-sans font-semibold"
              >
                {item.text}
              </Heading>
              <address>
                <Link
                  noPrefix
                  href={`mailto:${item.email}`}
                  className="text-center text-lg not-italic text-brand-blue"
                >
                  {item.email}
                </Link>
              </address>
            </li>
          ))}
        </ul>
        <div></div>
      </div>
    </Section>
  );
};

export default ContactSection;
