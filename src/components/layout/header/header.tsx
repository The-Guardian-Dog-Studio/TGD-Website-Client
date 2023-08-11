import { useMediaQuery } from "react-responsive";

import { MenuDropDown as Menu } from "@/components";
import { home } from "@/data";
import { NavigationLink, SocialMediaPlatform } from "@/domain/protocols";

import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const socialMediaTitle: string = home["social-media-title"];
const socialMediaPlatforms: SocialMediaPlatform[] = home["social-media"];
const navigationLinks: {
  "mobile-title": string;
  links: NavigationLink[];
} = home["navigation"];

const Header = (): JSX.Element => {
  const isDestopDevice = useMediaQuery({ minWidth: 768 });

  return (
    <header className="sticky top-0 z-50 col-start-1 col-end-13 h-20 w-full bg-white py-4 shadow-xl shadow-black/20">
      <div className="m-auto flex w-11/12 max-w-screen-xl items-center justify-between">
        {isDestopDevice ? (
          <DesktopHeader
            navigationLinks={navigationLinks.links}
            socialMediaPlatforms={socialMediaPlatforms}
          />
        ) : (
          <MobileHeader>
            <Menu.NavigationLinks
              title={navigationLinks["mobile-title"]}
              navigationLinks={navigationLinks.links}
            />
            <Menu.SocialMediaLinks
              title={socialMediaTitle}
              socialMediaPlatforms={socialMediaPlatforms}
            />
          </MobileHeader>
        )}
      </div>
    </header>
  );
};

export default Header;
