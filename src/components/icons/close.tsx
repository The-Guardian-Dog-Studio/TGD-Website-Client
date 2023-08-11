interface CloseProps extends React.SVGProps<SVGSVGElement> {}

const Close = ({
  stroke,
  className,
  color,
  ...props
}: CloseProps): JSX.Element => {
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
        d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Close;
