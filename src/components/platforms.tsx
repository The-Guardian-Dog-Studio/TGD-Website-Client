import { Button, Link } from "@/components";
import { Platform } from "@/domain/protocols";

interface PlatformsProps {
  platforms: Platform[];
}

const Platforms = ({ platforms }: PlatformsProps) => {
  return platforms.map((platform) => (
    <Link.Blank noPrefix href={platform.link} noAnimation>
      <Button
        tabIndex={-1}
        className="flex w-40 items-center justify-center gap-3 py-1 font-sans text-lg"
        variant="secondary"
      >
        <img src={platform.icon} className="h-4 w-4" alt={platform.name} />
        <span>{platform.name}</span>
      </Button>
    </Link.Blank>
  ));
};

export default Platforms;
