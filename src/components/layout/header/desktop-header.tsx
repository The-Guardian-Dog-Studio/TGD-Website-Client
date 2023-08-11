import { Link, Logo, SocialMedia } from "@/components";
import { NavigationLink, SocialMediaPlatform } from "@/domain/protocols";

interface DesktopHeaderProps {
  socialMediaPlatforms: SocialMediaPlatform[];
  navigationLinks: NavigationLink[];
}

const DesktopHeader = ({
  socialMediaPlatforms,
  navigationLinks,
}: DesktopHeaderProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center gap-6">
        <Logo />

        <nav>
          <ul className="flex h-full items-center gap-6 font-display text-brand-blue">
            {navigationLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden items-center gap-4 md:flex">
        <nav>
          <SocialMedia platforms={socialMediaPlatforms} />
        </nav>
      </div>
    </>
  );
};

export default DesktopHeader;
