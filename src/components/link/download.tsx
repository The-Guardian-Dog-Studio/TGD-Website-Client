import { Link } from "@/components";

import { LinkProps } from "./default";

interface DownloadLinkProps extends LinkProps {
  href: string;
  children: string;
}

const Download = ({
  href,
  children,
  ...props
}: DownloadLinkProps): JSX.Element => {
  return (
    <Link
      noPrefix
      download
      href={href}
      {...props}
      className={`text-brand-blue ${props.className}`}
    >
      {children}
    </Link>
  );
};

export { Download, type DownloadLinkProps };
