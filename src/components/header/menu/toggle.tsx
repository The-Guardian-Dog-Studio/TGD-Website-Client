import { Menu } from "@headlessui/react";

import { Close, Menu as MenuIcon } from "@/components";

interface ToggleProps {
  isOpen: boolean;
}

const Toggle = ({ isOpen }: ToggleProps): JSX.Element => {
  return (
    <Menu.Button>
      {isOpen ? (
        <Close className="stroke-brand-blue" />
      ) : (
        <MenuIcon className="stroke-brand-blue" />
      )}
    </Menu.Button>
  );
};

export default Toggle;
