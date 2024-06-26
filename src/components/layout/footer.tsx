import { Link, Logo, SocialMedia } from "@/components";
import { SocialMediaPlatform } from "@/domain/protocols";
import { makeHomeData } from "@/main/factories";

const { socialMedia } = makeHomeData();
const socialMediaPlatforms: SocialMediaPlatform[] = socialMedia.data;

interface FooterProps {
  showLinks?: boolean;
  topPageHref?: string;
}

const Footer = ({
  showLinks = true,
  topPageHref = "#featured-game",
}: FooterProps): JSX.Element => {
  return (
    <footer id="footer" className="col-start-1 col-end-13 flex flex-col">
      {showLinks && (
        <div className="flex flex-col items-center justify-center gap-8 p-8 md:flex-row md:gap-36">
          <Logo variant="gray" />

          <SocialMedia
            platforms={socialMediaPlatforms}
            icons={{ className: "fill-gray-800" }}
          />
        </div>
      )}
      <Link
        noAnimation
        noPrefix
        href={topPageHref}
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
