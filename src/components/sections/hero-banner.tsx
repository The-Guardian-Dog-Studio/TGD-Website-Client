import { Image, Link } from "@/components";

interface FeaturedSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {
  id: string;
  banner: {
    url: string;
  };
  scrollDownButton?: {
    active: boolean;
    anchor?: string;
  };
}

const HeroBanner = ({
  id,
  banner,
  scrollDownButton,
  children,
  ...props
}: FeaturedSectionProps): JSX.Element => {
  return (
    <section
      id={id}
      className="relative mt-[-5rem] grid h-screen w-full place-items-center"
      style={{
        background: `url(${banner.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      {...props}
    >
      {scrollDownButton?.active && (
        <div className="absolute bottom-10 left-1/2 h-32 w-24 translate-x-[-50%]">
          <Link
            href={scrollDownButton.anchor}
            noAnimation
            title="Veja os nossos jogos"
          >
            <Image
              className="h-24 w-full"
              src="/gamepad-with-arrow.svg"
              alt="O controle de videogame com uma seta apontando para baixo, indicando que irá te direcionar para a seção de jogos."
            />
          </Link>
        </div>
      )}

      {children}
    </section>
  );
};

export default HeroBanner;
