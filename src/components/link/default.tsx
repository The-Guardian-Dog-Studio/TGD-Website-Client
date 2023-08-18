import { removeDoubleSlashes } from "@/utils";

import { Download, DownloadLinkProps, LinkBlank, LinkBlankProps } from ".";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  noPrefix?: boolean;
  noAnimation?: boolean;
}

const DefaultLink = ({
  children,
  noPrefix,
  noAnimation,
  ...props
}: LinkProps): JSX.Element => {
  const url = removeDoubleSlashes(props.href, noPrefix);
  const animation = noAnimation ? "" : "hover:animate-pulse";

  return (
    <a {...props} href={url} className={`${animation} ${props.className}`}>
      {children}
    </a>
  );
};

DefaultLink.Download = (props: DownloadLinkProps) => Download(props);
DefaultLink.Blank = (props: LinkBlankProps) => LinkBlank(props);

export default DefaultLink;
