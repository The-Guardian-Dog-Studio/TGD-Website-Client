import { removeDoubleSlashes } from "@/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	noPrefix?: boolean;
	noAnimation?: boolean;
}

const Link = ({
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

export default Link;
