import { Image, Link } from "@/components";
import type { FeaturedGame } from "@/domain/protocols";
import { removeDoubleSlashes } from "@/utils";

interface FeaturedSectionProps {
	featuredGame: FeaturedGame;
}

const FeaturedSection = ({
	featuredGame,
}: FeaturedSectionProps): JSX.Element => {
	const backgroundUrl = removeDoubleSlashes(featuredGame.bannerUrl, false);

	return (
		<section
			id="featured-game"
			className="relative mt-[-5rem] grid h-screen w-full place-items-center"
			style={{
				background: `url(${backgroundUrl})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div className="absolute bottom-10 left-1/2 h-32 w-24 translate-x-[-50%]">
				<Link href="#games" noAnimation title="Veja os nossos jogos">
					<Image
						className="h-24 w-full"
						src="/gamepad-with-arrow.svg"
						alt="O controle de videogame com uma seta apontando para baixo, indicando que irá te direcionar para a seção de jogos."
					/>
				</Link>
			</div>
		</section>
	);
};

export default FeaturedSection;
