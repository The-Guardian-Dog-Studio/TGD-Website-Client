import { Link } from "@/components";

interface LinkBlankProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: string;
}

const LinkBlank = ({ href, children, ...props }: LinkBlankProps) => {
  return (
    <Link
      href={href}
      rel="noopener"
      target="_blank"
      className="text-brand-blue"
      {...props}
    >
      {children}
    </Link>
  );
};

export { LinkBlank, type LinkBlankProps };
