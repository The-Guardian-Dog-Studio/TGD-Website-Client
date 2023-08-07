import { Link, Logo, SocialMedia } from "@/components";

import data from "../data.json";

const socialMediaPlatforms = data["social-media"];

const Header = (): JSX.Element => {
	return (
		<header className="sticky top-0 z-50 h-20 w-full bg-white py-4 shadow-xl shadow-black/20">
			<div className="m-auto flex w-11/12 max-w-screen-xl items-center justify-between">
				<div className="flex items-center gap-6">
					<Logo />

					<nav className="hidden md:block">
						<ul className="flex h-full items-center gap-6 font-display text-brand-blue">
							<li>
								<Link href="#games">Jogos</Link>
							</li>
							<li>
								<Link href="#about">Sobre Nós</Link>
							</li>
							<li>
								<Link href="#contact">Contato</Link>
							</li>
							<li>
								<Link href="/press-kit">Press Kit</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="hidden items-center gap-4 md:flex">
					<nav>
						<SocialMedia platforms={socialMediaPlatforms} />
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
