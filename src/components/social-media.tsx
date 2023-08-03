import { GetIcon } from "@/components/icons";
import type { SocialMediaPlatform } from "@/domain/protocols/social-media-platform";

interface SocialMediaProps {
  className?: string;
  icons?: {
    className?: string;
  };
  platforms: SocialMediaPlatform[];
}

const SocialMedia = ({
  className,
  icons,
  platforms,
}: SocialMediaProps): JSX.Element => {
  return (
    <nav>
      <ul className={`flex gap-4 ${className}`}>
        {platforms.map((platform) => (
          <li key={platform.name}>
            <a href={platform.url}>
              <GetIcon
                name={platform.icon}
                className={`fill-brand-blue ${icons?.className}`}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialMedia;
