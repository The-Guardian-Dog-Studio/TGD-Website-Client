interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const size = {
  1: "text-5xl",
  2: "text-3xl",
  3: "text-2xl",
};

const Heading = ({ level, children, ...props }: TitleProps): JSX.Element => {
  const Element = `h${level}` as HeadingTag;
  const fontSize = size[level as keyof typeof size];

  return (
    <Element
      {...props}
      className={`font-display font-bold text-gray-800 ${fontSize} ${props.className}`}
    >
      {children}
    </Element>
  );
};

export default Heading;
