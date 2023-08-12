import { SVGProps, useId } from "react";

interface FacebookFilledProps extends SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}

const FacebookFilled = ({ title, titleId, ...props }: FacebookFilledProps) => {
  const titleProp = title ? title : "Facebook";
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
          d="M22.913.769H2.062c-.714 0-1.293.58-1.293 1.294v20.85c0 .715.58 1.294 1.294 1.293h11.226v-9.063h-3.044v-3.548h3.044v-2.61c0-3.028 1.848-4.676 4.549-4.676 1.294 0 2.405.096 2.73.14v3.164h-1.863c-1.47 0-1.754.698-1.754 1.723v2.26h3.513l-.457 3.547H16.95v9.063h5.962c.714 0 1.293-.578 1.293-1.293V2.062c0-.714-.579-1.293-1.293-1.293Z"
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

export default FacebookFilled;
