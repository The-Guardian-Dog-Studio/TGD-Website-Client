import { home } from "@/data";
import { SocialMediaPlatform } from "@/domain/protocols/social-media-platform";

import { Link, Logo, SocialMedia } from ".";

const socialMediaPlatforms: SocialMediaPlatform[] = home["social-media"];

const Footer = (): JSX.Element => {
	return (
		<footer className="flex flex-col">
			<div className="flex flex-col items-center justify-center gap-8 p-8 md:flex-row md:gap-36">
				<Logo variant="gray" />

				<SocialMedia
					platforms={socialMediaPlatforms}
					icons={{ className: "fill-gray-800" }}
				/>
			</div>
			<Link
				noAnimation
				href="#featured-game"
				className="mb-[-1.55rem] block self-center"
				aria-label="Voltar para o topo da página"
			>
				<span className="block h-12 w-12 bg-brand-red [clip-path:polygon(50%_0%,0_50%,100%_50%)]"></span>
			</Link>
			<section className="bg-gray-800 p-3 text-center font-display text-lg font-normal text-white">
				<p>Feito com ❤️ por TGD Studio</p>
			</section>
		</footer>
	);
};

export default Footer;
