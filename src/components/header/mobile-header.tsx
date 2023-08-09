import { Menu as MenuLib } from "@headlessui/react";

import { NavigationLink, SocialMediaPlatform } from "@/domain/protocols";

import { Logo } from "..";
import * as Menu from "./menu";

interface MobileHeaderProps {
  socialMediaPlatforms: SocialMediaPlatform[];
  navigationLinks: NavigationLink[];
}

const MobileHeader = ({
  socialMediaPlatforms,
  navigationLinks,
}: MobileHeaderProps): JSX.Element => {
  return (
    <>
      <Logo />
      <MenuLib as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Toggle isOpen={open} />
            <Menu.Transition>
              <MenuLib.Items className="absolute right-0 mt-[1.4rem] w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
                <Menu.NavigationLinks navigationLinks={navigationLinks} />
                <Menu.SocialMediaLinks
                  socialMediaPlatforms={socialMediaPlatforms}
                />
              </MenuLib.Items>
            </Menu.Transition>
          </>
        )}
      </MenuLib>
    </>
  );
};

export default MobileHeader;
