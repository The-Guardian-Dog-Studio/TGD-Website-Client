import { Menu as MenuLib } from "@headlessui/react";

import { GetIcon, Link } from "@/components";
import { MenuDropDown as Menu } from "@/components/layout/header";
import { SocialMediaPlatform } from "@/domain/protocols";

import { icons, links } from "./tailwind-classes";

interface SocialMedia {
  title: string;
  socialMediaPlatforms: SocialMediaPlatform[];
}

const SocialMediaLinks = ({
  title,
  socialMediaPlatforms,
}: SocialMedia): JSX.Element => {
  return (
    <Menu.Item title={title} className="ml-4 mt-2 text-base">
      {socialMediaPlatforms.map((platform) => (
        <div className="p-1" key={platform.name}>
          <MenuLib.Item>
            {({ active }) => (
              <Link
                noPrefix
                noAnimation
                href={platform.url}
                className={`${links(
                  active
                )} group flex w-full items-center gap-4 rounded-md p-2 text-sm font-semibold transition-all`}
              >
                <GetIcon
                  name={platform.icon}
                  className={`transition-transform ${icons(active)}`}
                />
                {platform.name}
              </Link>
            )}
          </MenuLib.Item>
        </div>
      ))}
    </Menu.Item>
  );
};

export default SocialMediaLinks;
