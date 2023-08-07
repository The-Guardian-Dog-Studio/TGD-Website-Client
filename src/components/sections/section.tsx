interface SectionProps extends React.HTMLAttributes<HTMLDivElement> { }

const Section = ({ children, ...props }: SectionProps): JSX.Element => {
	return (
		<section
			{...props}
			className={`mx-auto mt-14 flex w-11/12 max-w-screen-lg flex-col items-center gap-10 overflow-x-hidden ${props.className}`}
		>
			{children}
		</section>
	);
};

export default Section;
