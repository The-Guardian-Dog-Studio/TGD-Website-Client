import {
	Factsheet as FactsheetInterface,
	FactsheetBase,
	FactsheetContent,
} from "@/domain/protocols";

import { Heading, Link } from "..";
import { Section } from ".";

interface FactsheetProps {
	factsheet: FactsheetInterface;
}

const isALink = (item: FactsheetContent): boolean => {
	return typeof item?.url === "string";
};

const FactsheetContent = ({
	content,
}: {
	content: FactsheetBase["content"];
}): JSX.Element => {
	if (isALink(content[0])) {
		return (
			<>
				{content.map((item) => (
					<Link
						key={item.text}
						className="text-brand-blue"
						noPrefix
						href={item.url}
					>
						{item.text}
					</Link>
				))}
			</>
		);
	}

	return (
		<>
			{content.map((item) => (
				<p key={item.text}>{item.text}</p>
			))}
		</>
	);
};

const Factsheet = ({ factsheet }: FactsheetProps): JSX.Element => {
	return (
		<Section
			id="factsheet"
			className="!m-0 mx-0 flex w-full min-w-[200px] flex-col !items-start lg:w-fit"
		>
			<Heading level={2} className="text-xl">
				{factsheet.title}
			</Heading>
			<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
				{factsheet.content.map((fact) => (
					<section
						key={fact.title}
						className="col-start-auto col-end-auto flex flex-col gap-1"
					>
						<Heading level={3} className="mb-2 font-sans text-lg">
							{fact.title}
						</Heading>
						<FactsheetContent content={fact.content} />
					</section>
				))}
			</div>
		</Section>
	);
};

export default Factsheet;
