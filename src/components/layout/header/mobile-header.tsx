import { Menu as MenuLib } from "@headlessui/react";

import { Logo } from "@/components";

import * as Menu from "./menu";

interface MobileHeaderProps {
  children: React.ReactNode;
}

const MobileHeader = ({ children }: MobileHeaderProps): JSX.Element => {
  return (
    <>
      <Logo />
      <MenuLib as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Toggle isOpen={open} />
            <Menu.Transition>
              <MenuLib.Items className="absolute right-0 mt-[1.4rem] max-h-[calc(100vh-6rem)] w-56 origin-top-right divide-y divide-gray-100 overflow-y-auto rounded-md bg-white shadow-lg focus:outline-none">
                {children}
              </MenuLib.Items>
            </Menu.Transition>
          </>
        )}
      </MenuLib>
    </>
  );
};

export default MobileHeader;
