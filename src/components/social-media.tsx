import { Link } from "@/components";
import { GetIcon } from "@/components/icons";
import type { SocialMediaPlatform } from "@/domain/protocols";

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
						<Link noPrefix href={platform.url} title={platform.name}>
							<GetIcon
								name={platform.icon}
								className={`fill-brand-blue ${icons?.className}`}
							/>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default SocialMedia;
