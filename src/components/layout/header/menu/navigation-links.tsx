import { Menu as MenuLib } from "@headlessui/react";

import { Link } from "@/components";
import { MenuDropDown as Menu } from "@/components/layout/header";
import { NavigationLink } from "@/domain/protocols";

import { links } from "./tailwind-classes";

interface SocialMedia {
  title: string;
  navigationLinks: NavigationLink[];
}

const NavigationLinks = ({
  title,
  navigationLinks,
}: SocialMedia): JSX.Element => {
  return (
    <Menu.Item title={title}>
      {navigationLinks.map((nav) => (
        <div className="p-1" key={nav.url}>
          <MenuLib.Item>
            {({ active }) => (
              <Link
                noPrefix
                noAnimation
                href={nav.url}
                className={`${links(
                  active
                )} group flex w-full items-center  gap-4 rounded-md p-2 text-sm font-semibold transition-all`}
              >
                {nav.text}
              </Link>
            )}
          </MenuLib.Item>
        </div>
      ))}
    </Menu.Item>
  );
};

export default NavigationLinks;
