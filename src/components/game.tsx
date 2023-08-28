import { Button, Image, Link } from "@/components";
import { Game } from "@/domain/protocols";

interface GameProps extends Pick<Game, "name" | "banner"> {
  url: string;
}

const Game = ({ banner, name, url }: GameProps): JSX.Element => {
  return (
    <div className="flex h-auto w-full flex-col items-end gap-2 md:max-w-[21rem]">
      <Image
        src={banner.url}
        className="h-[330px] w-[262.5px] object-cover md:h-[440px] md:w-[350px]"
        alt={banner.alt}
      />
      <Link.Blank href={url} title={name}>
        <Button tabIndex={-1}>Jogar {name}</Button>
      </Link.Blank>
    </div>
  );
};

export default Game;
