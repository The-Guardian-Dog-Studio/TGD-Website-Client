interface InstagramOutlineProps extends React.SVGProps<SVGSVGElement> {}

const InstagramOutline = (props: InstagramOutlineProps): JSX.Element => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_206_207)">
        <path d="M18.2327 0H6.76726C3.03573 0 0 3.03573 0 6.76726V18.2329C0 21.9642 3.03573 25 6.76726 25H18.2329C21.9642 25 25 21.9642 25 18.2329V6.76726C25 3.03573 21.9642 0 18.2327 0V0ZM23.5343 18.2329C23.5343 21.1561 21.1561 23.5343 18.2327 23.5343H6.76726C3.84387 23.5343 1.4656 21.1561 1.4656 18.2329V6.76726C1.4656 3.84387 3.84387 1.4656 6.76726 1.4656H18.2329C21.1561 1.4656 23.5343 3.84387 23.5343 6.76726V18.2329Z" />
        <path d="M12.4998 5.66418C8.7305 5.66418 5.66406 8.73062 5.66406 12.4999C5.66406 16.2692 8.7305 19.3357 12.4998 19.3357C16.2691 19.3357 19.3355 16.2692 19.3355 12.4999C19.3355 8.73062 16.2691 5.66418 12.4998 5.66418ZM12.4998 17.87C9.53883 17.87 7.12967 15.4611 7.12967 12.4999C7.12967 9.53896 9.53883 7.12979 12.4998 7.12979C15.4609 7.12979 17.8699 9.53896 17.8699 12.4999C17.8699 15.4611 15.4609 17.87 12.4998 17.87Z" />
        <path d="M19.4994 3.23657C18.3855 3.23657 17.4795 4.14275 17.4795 5.25645C17.4795 6.37034 18.3855 7.27652 19.4994 7.27652C20.6133 7.27652 21.5194 6.37034 21.5194 5.25645C21.5194 4.14256 20.6133 3.23657 19.4994 3.23657ZM19.4994 5.81072C19.1938 5.81072 18.9451 5.56201 18.9451 5.25645C18.9451 4.9507 19.1938 4.70218 19.4994 4.70218C19.8051 4.70218 20.0538 4.9507 20.0538 5.25645C20.0538 5.56201 19.8051 5.81072 19.4994 5.81072Z" />
      </g>
      <defs>
        <clipPath id="clip0_206_207">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default InstagramOutline;