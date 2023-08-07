import { FeaturedGame } from "@/domain/protocols/featured-game";
import siteData from "@/data.json";

const featuredSectionData: FeaturedGame = siteData["featured-game"];

const FeaturedSection = (): JSX.Element => {
	return (
		<section
			id="featured-game"
			className="relative mt-[-5rem] grid h-screen w-full place-items-center"
			style={{
				background: `url(${featuredSectionData.bannerUrl})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
			}}
		>
			<div className="absolute bottom-10 left-1/2 h-32 w-24 translate-x-[-50%]">
				<a href="#games" title="Veja os nossos jogos">
					<img
						className="h-24 w-full"
						src="/gamepad-with-arrow.svg"
						alt="O controle de videogame com uma seta apontando para baixo"
					/>
				</a>
			</div>
		</section>
	);
};

export default FeaturedSection;
