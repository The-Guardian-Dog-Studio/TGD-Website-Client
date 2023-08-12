import { SVGProps, useId } from "react";

interface TwitterFilled extends SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}

const TwitterFilled = ({ title, titleId, ...props }: TwitterFilled) => {
  const titleProp = title ? title : "Twitter";
  const titleIdProp = titleId ? titleId : useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-labelledby={titleId}
      width="25px"
      height="25px"
      {...props}
    >
      <title id={titleIdProp}>{titleProp}</title>
      <g clipPath="url(#a)">
        <path
          fill="#fff"
          d="M23.197 0H1.803C.807 0 0 .807 0 1.803v21.394C0 24.193.807 25 1.803 25h21.394c.996 0 1.803-.807 1.803-1.803V1.803C25 .807 24.193 0 23.197 0Zm-4.99 9.746c.006.123.009.247.009.371 0 3.791-2.886 8.163-8.164 8.163a8.12 8.12 0 0 1-4.397-1.289 5.757 5.757 0 0 0 4.248-1.188 2.872 2.872 0 0 1-2.681-1.993 2.861 2.861 0 0 0 1.296-.05 2.87 2.87 0 0 1-2.302-2.811v-.037c.387.215.83.344 1.3.359a2.866 2.866 0 0 1-.888-3.83 8.146 8.146 0 0 0 5.914 2.997 2.87 2.87 0 0 1 4.89-2.617 5.755 5.755 0 0 0 1.82-.696 2.88 2.88 0 0 1-1.261 1.587 5.722 5.722 0 0 0 1.647-.452 5.831 5.831 0 0 1-1.43 1.486Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default TwitterFilled;
