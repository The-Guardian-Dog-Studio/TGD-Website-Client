import { Button, Heading, Section } from "@/components";
import { Tabs } from "@/components/ui";
import type { AboutProtocol } from "@/domain/protocols/about";
import data from "@/data.json";

const aboutData: AboutProtocol = data["about"];

const AboutSection = (): JSX.Element => {
	return (
		<Section id="about" className="gap-16">
			<Heading level={1}>Sobre Nós</Heading>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-24">
				<Image
					src={aboutData.banner.url}
					alt={aboutData.banner.alt}
					className="h-fit w-full object-contain"
				/>
				<Tabs
					tabs={aboutData.tabs.map((item) => item.title)}
					content={aboutData.tabs.map((item) => (
						<div className="flex flex-col">
							<p className="text-justify">{item.content}</p>
							{typeof item.link !== "undefined" && (
								<a
									href={item.link.url}
									target="_blank"
									rel="noreferrer"
									className="mt-4 block self-end"
									aria-label={`Este link abre uma nova aba no navegador. Sua rota é: ${item.link.url}`}
								>
									<Button tabIndex={-1}>{item.link.text}</Button>
								</a>
							)}
						</div>
					))}
				/>
			</div>
		</Section>
	);
};

export default AboutSection;
