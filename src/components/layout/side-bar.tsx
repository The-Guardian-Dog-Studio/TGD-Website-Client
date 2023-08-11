import { useMediaQuery } from "react-responsive";

import { Heading, Link } from "@/components";
import { NavigationLink } from "@/domain/protocols";

interface SideBarProps {
  navigationLinks: NavigationLink[];
  siteUrl: string;
}

const SideBar = ({ navigationLinks, siteUrl }: SideBarProps): JSX.Element => {
  const isVisible = useMediaQuery({
    minWidth: 1024,
  });

  return (
    <aside
      aria-hidden={!isVisible}
      className="sticky top-0 col-start-1 col-end-4 hidden h-fit flex-col justify-start border-r-2 border-solid border-r-gray-400 py-12 pl-12 pr-16 lg:flex"
    >
      <Heading level={1}>TGD Studio</Heading>
      <Link href={siteUrl} noPrefix className="mb-12 mt-1">
        {siteUrl}
      </Link>

      <nav>
        <ul>
          {navigationLinks.map((link) => {
            return (
              <li key={link.text} className="mb-2 font-display font-bold">
                <Link href={link.url} noPrefix>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
