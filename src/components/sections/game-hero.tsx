import { Button, HeroBanner, Link, Platforms, SocialMedia } from "@/components";
import { Game, SocialMediaPlatform } from "@/domain/protocols";

interface ContactSectionProps {
  game: Game;
  socialMedia: SocialMediaPlatform[];
  connect: {
    link: string;
    text: string;
  };
}

const ContactSection = ({
  game,
  socialMedia,
  connect,
}: ContactSectionProps): JSX.Element => {
  return (
    <HeroBanner
      id="#hero"
      banner={{
        url: game.banner.url,
      }}
      className="h-[calc(100vh-75px)]"
    >
      <footer className="absolute bottom-0 flex min-h-[75px] w-full justify-center bg-gray-900 text-white">
        <div className="flex w-[90vw] max-w-screen-xl flex-wrap items-center justify-around gap-6 p-4">
          <div className="flex flex-wrap items-center justify-around gap-8 text-lg">
            <Link.Blank noPrefix href={connect.link} noAnimation>
              <Button
                tabIndex={-1}
                noShadow
                className="flex w-40 items-center justify-center gap-3 py-1"
              >
                {connect.text}
              </Button>
            </Link.Blank>

            <SocialMedia
              className="flex gap-8 md:gap-4"
              platforms={socialMedia}
            />
          </div>

          <div className="flex gap-7 max-sm:hidden">
            {game.platforms !== undefined && game.platforms.length > 0 && (
              <Platforms platforms={game.platforms} />
            )}
          </div>
        </div>
      </footer>
    </HeroBanner>
  );
};

export default ContactSection;
