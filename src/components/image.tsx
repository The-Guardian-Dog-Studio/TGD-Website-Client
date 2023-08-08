import { removeDoubleSlashes } from "@/utils";

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  noPrefixOnSrc?: boolean;
}

const Image = ({
  noPrefixOnSrc = false,
  ...props
}: ImageProps): JSX.Element => {
  const url = removeDoubleSlashes(props.src, noPrefixOnSrc);
  return <img {...props} src={url} alt={props.alt} />;
};

export default Image;
