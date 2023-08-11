export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  noHr?: boolean;
  hr?: {
    className?: string;
  };
}

const Section = ({
  children,
  noHr = false,
  hr,
  ...props
}: SectionProps): JSX.Element => {
  return (
    <>
      <section
        {...props}
        className={`mx-auto mt-12 flex w-11/12 max-w-screen-xl flex-col items-center gap-10 overflow-x-hidden py-14 ${props.className}`}
      >
        {children}
      </section>
      {!noHr && <hr className={`border-gray-400 ${hr?.className}`} />}
    </>
  );
};

export default Section;
