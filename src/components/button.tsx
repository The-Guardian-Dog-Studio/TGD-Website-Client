import { ButtonHTMLAttributes } from "react";

const variants = {
  primary: {
    background: "bg-brand-red",
    shadow: "shadow-brand-red",
  },
  secondary: {
    background: "bg-amber-500",
    shadow: "shadow-amber-500",
  },
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
  noShadow?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  noShadow,
  ...props
}: ButtonProps): JSX.Element => {
  const { background, shadow } = variants[variant];

  return (
    <button
      {...props}
      className={`min-h-[2rem] min-w-[8rem] max-w-full scale-100 overflow-x-hidden text-ellipsis whitespace-nowrap p-2 font-display font-medium text-white shadow-md transition-all hover:scale-90 hover:shadow-none ${background} ${
        !noShadow && shadow
      } ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
