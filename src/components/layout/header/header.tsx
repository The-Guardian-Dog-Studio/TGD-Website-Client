import { useMediaQuery } from "react-responsive";

import { MenuDropDown as Menu } from "@/components";
import { makeHomeData } from "@/main/factories";

import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const { socialMedia, navigation } = makeHomeData();

const Header = (): JSX.Element => {
  const isDestopDevice = useMediaQuery({ minWidth: 768 });

  return (
    <header className="sticky top-0 z-50 col-start-1 col-end-13 h-20 w-full bg-white py-4 shadow-xl shadow-black/20">
      <div className="m-auto flex w-11/12 max-w-screen-xl items-center justify-between">
        {isDestopDevice ? (
          <DesktopHeader
            navigationLinks={navigation.data}
            socialMediaPlatforms={socialMedia.data}
          />
        ) : (
          <MobileHeader>
            <Menu.NavigationLinks
              title={navigation.title}
              navigationLinks={navigation.data}
            />
            <Menu.SocialMediaLinks
              title={socialMedia.title}
              socialMediaPlatforms={socialMedia.data}
            />
          </MobileHeader>
        )}
      </div>
    </header>
  );
};

export default Header;
