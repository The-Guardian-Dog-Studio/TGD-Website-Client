import { removeDoubleSlashes } from "@/utils";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	noPrefix?: boolean;
}

const Link = ({ children, noPrefix, ...props }: LinkProps): JSX.Element => {
	const url = removeDoubleSlashes(props.href, noPrefix);
	return (
		<a {...props} href={url}>
			{children}
		</a>
	);
};

export default Link;
