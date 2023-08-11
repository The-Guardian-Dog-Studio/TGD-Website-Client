interface MenuProps extends React.SVGProps<SVGSVGElement> {}

const Menu = ({
  className,
  color,
  stroke,
  ...props
}: MenuProps): JSX.Element => {
  return (
    <svg
      width="28px"
      height="28px"
      strokeWidth={1.5}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      className={`fill-brand-blue ${className}`}
      color={color ? color : "#000000"}
      stroke={stroke ? stroke : "#000000"}
    >
      <path
        d="M3 5h18M3 12h18M3 19h18"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Menu;
