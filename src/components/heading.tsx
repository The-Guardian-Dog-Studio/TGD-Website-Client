interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	level: 1 | 2 | 3 | 4 | 5 | 6;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const Heading = ({ level, children, ...props }: TitleProps): JSX.Element => {
	const Element = `h${level}` as HeadingTag;
	return (
		<Element
			{...props}
			className={`font-display text-3xl font-bold text-gray-800 ${props.className}`}
		>
			{children}
		</Element>
	);
};

export default Heading;
