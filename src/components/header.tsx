import { Logo, SocialMedia } from "@/components";

import data from "../data.json";

const socialMediaPlatforms = data["social-media"];

const Header = (): JSX.Element => {
	return (
		<header className="sticky top-0 z-50 h-20 w-full bg-white py-4 shadow-xl shadow-black/20">
			<div className="m-auto flex w-11/12 max-w-screen-xl items-center justify-between">
				<div className="flex items-center gap-6">
					<Logo />

					<nav>
						<ul className="flex h-full items-center gap-6 font-display text-brand-blue">
							<li>
								<a href="#games">Jogos</a>
							</li>
							<li>
								<a href="#about">Sobre Nós</a>
							</li>
							<li>
								<a href="#contact">Contato</a>
							</li>
							<li>
								<a href="/press-kit">Press Kit</a>
							</li>
						</ul>
					</nav>
				</div>

				<div className="flex items-center gap-4">
					<nav>
						<SocialMedia platforms={socialMediaPlatforms} />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
