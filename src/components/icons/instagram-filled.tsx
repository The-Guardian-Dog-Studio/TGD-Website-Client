import { SVGProps, useId } from "react";

interface InstagramFilled extends SVGProps<SVGSVGElement> {
  title?: string;
  titleId?: string;
}

const InstagramFilled = ({ title, titleId, ...props }: InstagramFilled) => {
  const titleProp = title ? title : "Instagram";
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
      <g fill="#fff" clipPath="url(#a)">
        <path d="M18.095 8.267a2.224 2.224 0 0 0-.537-.826 2.222 2.222 0 0 0-.825-.536c-.253-.099-.633-.216-1.333-.247-.757-.035-.984-.042-2.9-.042-1.917 0-2.144.007-2.9.041-.7.032-1.08.15-1.333.248a2.22 2.22 0 0 0-.825.536 2.225 2.225 0 0 0-.538.826c-.098.253-.215.633-.247 1.333-.034.757-.042.984-.042 2.9 0 1.917.008 2.144.042 2.9.032.7.15 1.08.247 1.333.116.312.299.594.537.826.232.238.514.421.826.537.253.098.633.215 1.333.247.756.034.983.041 2.9.041 1.917 0 2.144-.007 2.9-.041.7-.032 1.08-.149 1.333-.247a2.377 2.377 0 0 0 1.362-1.363c.099-.253.216-.633.248-1.332.034-.757.041-.984.041-2.9 0-1.917-.007-2.144-.041-2.901-.032-.7-.15-1.08-.248-1.333ZM12.5 16.186a3.686 3.686 0 1 1 0-7.372 3.686 3.686 0 0 1 0 7.372Zm3.831-6.656a.861.861 0 1 1 0-1.723.861.861 0 0 1 0 1.723Z" />
        <path d="M14.893 12.5a2.393 2.393 0 1 1-4.786 0 2.393 2.393 0 0 1 4.786 0Z" />
        <path d="M23.197 0H1.803C.807 0 0 .807 0 1.803v21.394C0 24.193.807 25 1.803 25h21.394c.996 0 1.803-.807 1.803-1.803V1.803C25 .807 24.193 0 23.197 0Zm-3.563 15.46c-.034.763-.156 1.285-.333 1.742a3.67 3.67 0 0 1-2.1 2.099c-.456.177-.978.299-1.742.333-.765.035-1.01.044-2.959.044-1.95 0-2.194-.009-2.96-.044-.763-.035-1.285-.156-1.741-.333a3.516 3.516 0 0 1-1.272-.828 3.518 3.518 0 0 1-.828-1.271c-.177-.457-.299-.979-.333-1.743-.036-.765-.044-1.01-.044-2.959 0-1.95.008-2.194.044-2.96.034-.763.156-1.285.333-1.742.18-.479.463-.912.828-1.27a3.516 3.516 0 0 1 1.271-.829c.457-.177.979-.299 1.743-.333.765-.035 1.01-.044 2.959-.044 1.95 0 2.194.009 2.96.044.763.034 1.285.156 1.742.333.478.18.912.463 1.271.828.365.359.648.792.828 1.271.177.457.299.979.334 1.743.034.765.043 1.01.043 2.959 0 1.95-.009 2.194-.044 2.96Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};
export default InstagramFilled;
