interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  noHr?: boolean;
}

const Section = ({
  children,
  noHr = false,
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
      {!noHr && <hr className="border-gray-400" />}
    </>
  );
};

export default Section;
