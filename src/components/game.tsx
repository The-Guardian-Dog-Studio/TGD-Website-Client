import { Game } from "@/domain/protocols/game";
import { Button } from "@/components";

interface GameProps extends Game { }

const Game = ({ bannerUrl, name, url }: GameProps): JSX.Element => {
	return (
		<div className="flex h-auto w-full flex-col items-end gap-2 md:max-w-[21rem]">
			<img
				src={bannerUrl}
				className="h-[330px] w-[262.5px] object-cover md:h-[440px] md:w-[350px]"
			/>
			<a href={url} target="_blank" rel="noreferrer" title={name}>
				<Button tabIndex={-1}>Jogar {name}</Button>
			</a>
		</div>
	);
};

export default Game;
