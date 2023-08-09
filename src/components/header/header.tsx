import { useMediaQuery } from "react-responsive";

import { home } from "@/data";
import { NavigationLink } from "@/domain/protocols/navigation-link";
import { SocialMediaPlatform } from "@/domain/protocols/social-media-platform";

import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const socialMediaPlatforms: SocialMediaPlatform[] = home["social-media"];
const navigationLinks: NavigationLink[] = home["navigation"];

const Header = (): JSX.Element => {
	const isDestopDevice = useMediaQuery({ minWidth: 768 });

	return (
		<header className="sticky top-0 z-50 h-20 w-full bg-white py-4 shadow-xl shadow-black/20">
			<div className="m-auto flex w-11/12 max-w-screen-xl items-center justify-between">
				{isDestopDevice ? (
					<DesktopHeader
						navigationLinks={navigationLinks}
						socialMediaPlatforms={socialMediaPlatforms}
					/>
				) : (
					<MobileHeader
						navigationLinks={navigationLinks}
						socialMediaPlatforms={socialMediaPlatforms}
					/>
				)}
			</div>
		</header>
	);
};

export default Header;
