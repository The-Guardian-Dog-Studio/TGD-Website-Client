import { Menu as MenuLib } from "@headlessui/react";
import { useMediaQuery } from "react-responsive";

import { Logo, MenuDropDown as Menu, SideBar } from "@/components";
import { NavigationLink } from "@/domain/protocols";

interface PressKitNavigationProps {
  navigationLinks: NavigationLink[];
  siteUrl: string;
  title: string;
}

const PressKitNavigation = ({
  navigationLinks,
  siteUrl,
  title,
}: PressKitNavigationProps): JSX.Element => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      {isDesktop && (
        <SideBar navigationLinks={navigationLinks} siteUrl={siteUrl} />
      )}

      {!isDesktop && (
        <header className="sticky top-0 z-50 col-start-1 col-end-13 h-20 w-full bg-white py-4 shadow-xl shadow-black/20 lg:hidden">
          <div className="m-auto flex w-11/12 max-w-screen-xl items-center justify-between">
            <Logo />
            <MenuLib as="div" className="relative inline-block text-left">
              {({ open }) => (
                <>
                  <Menu.Toggle isOpen={open} />
                  <Menu.Transition>
                    <MenuLib.Items className="absolute right-0 mt-[1.4rem] max-h-[calc(100vh-6rem)] w-56 origin-top-right divide-y divide-gray-100 overflow-y-auto rounded-md bg-white shadow-lg focus:outline-none">
                      <Menu.NavigationLinks
                        title={title}
                        navigationLinks={navigationLinks}
                      />
                    </MenuLib.Items>
                  </Menu.Transition>
                </>
              )}
            </MenuLib>
          </div>
        </header>
      )}
    </>
  );
};

export default PressKitNavigation;
