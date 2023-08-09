import { Menu } from "@headlessui/react";

import { GetIcon, Heading, Link } from "@/components";
import { SocialMediaPlatform } from "@/domain/protocols";

import { icons, links } from "./tailwind-classes";

interface SocialMedia {
  socialMediaPlatforms: SocialMediaPlatform[];
}

const SocialMediaLinks = ({
  socialMediaPlatforms,
}: SocialMedia): JSX.Element => {
  return (
    <>
      <Heading level={4} className="ml-4 mt-2 text-base">
        Redes Sociais
      </Heading>
      {socialMediaPlatforms.map((platform) => (
        <div className="p-1" key={platform.name}>
          <Menu.Item>
            {({ active }) => (
              <Link
                noPrefix
                noAnimation
                href={platform.url}
                className={`${links(
                  active
                )} group flex w-full items-center gap-4 rounded-md p-2 text-sm font-semibold`}
              >
                <GetIcon
                  name={platform.icon}
                  className={`transition-transform ${icons(active)}`}
                />
                {platform.name}
              </Link>
            )}
          </Menu.Item>
        </div>
      ))}
    </>
  );
};

export default SocialMediaLinks;
