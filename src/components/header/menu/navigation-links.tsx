import { Menu } from "@headlessui/react";

import { Heading, Link } from "@/components";
import { NavigationLink } from "@/domain/protocols/navigation-link";

import { links } from "./tailwind-classes";

interface SocialMedia {
	navigationLinks: NavigationLink[];
}

const NavigationLinks = ({ navigationLinks }: SocialMedia): JSX.Element => {
	return (
		<>
			<Heading level={4} className="ml-4 text-base">
				Navegação
			</Heading>
			{navigationLinks.map((nav) => (
				<div className="p-1" key={nav.url}>
					<Menu.Item>
						{({ active }) => (
							<Link
								noPrefix
								noAnimation
								href={nav.url}
								className={`${links(
									active
								)} group flex w-full  items-center gap-4 rounded-md p-2 text-sm font-semibold`}
							>
								{nav.text}
							</Link>
						)}
					</Menu.Item>
				</div>
			))}
		</>
	);
};

export default NavigationLinks;
