interface IframeProps extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  title: string;
}

const Iframe = ({ ...props }: IframeProps): JSX.Element => {
  return (
    <div className="relative h-0 pb-[56.25%]">
      <iframe
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        {...props}
        title={props.title}
      />
    </div>
  );
};

export default Iframe;
