export const links = (isActive: boolean) => {
  return isActive
    ? "bg-brand-red text-white"
    : "bg-transparent text-brand-blue";
};

export const icons = (isActive: boolean) => {
  return isActive
    ? "translate-x-0 fill-white"
    : "translate-x-2 fill-brand-blue";
};
