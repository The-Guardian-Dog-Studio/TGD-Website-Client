import { Heading, Link, Section } from "@/components";
import { home } from "@/data";
import { ContactData } from "@/domain/protocols/contact-protocol";

const contactData: ContactData = home["contact"];

const ContactSection = (): JSX.Element => {
	return (
		<Section id="contact" className="gap-16">
			<Heading level={1}>Contato</Heading>
			<div>
				<ul className="flex flex-wrap justify-around gap-8 md:gap-16">
					{contactData.email.map((item) => (
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
