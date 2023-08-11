import { Heading } from "@/components";

interface ItemProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Item = ({ title, children, className }: ItemProps): JSX.Element => {
  return (
    <>
      {title && (
        <Heading level={4} className={`ml-4 text-base ${className}`}>
          {title}
        </Heading>
      )}

      {children}
    </>
  );
};

export default Item;
