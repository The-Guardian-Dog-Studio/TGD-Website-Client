import { Transition as TransitionLib } from "@headlessui/react";
import { Fragment } from "react";

interface TransitionProps {
  children: React.ReactNode;
}

const Transition = ({ children, ...props }: TransitionProps): JSX.Element => {
  return (
    <TransitionLib
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
      {...props}
    >
      {children}
    </TransitionLib>
  );
};

export default Transition;
