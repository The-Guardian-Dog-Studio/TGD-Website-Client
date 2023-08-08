import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = ({ children, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			{...props}
			className={`min-h-[2rem] min-w-[8rem] max-w-full scale-100 overflow-x-hidden text-ellipsis whitespace-nowrap bg-brand-red p-2 font-display font-medium text-white shadow-md shadow-brand-red transition-all hover:scale-90 hover:shadow-none ${props.className}`}
		>
			{children}
		</button>
	);
};

export default Button;
