import { Tab } from "@headlessui/react";

import { Heading } from "@/components";

interface TabsProps {
  tabs: React.ReactNode[];
  content: React.ReactNode[];
}

const Tabs = ({ tabs, content }: TabsProps): JSX.Element => {
  return (
    <Tab.Group as="div" className="flex flex-col gap-4">
      <Tab.List className="flex gap-4 overflow-auto">
        {tabs.map((tab, index) => (
          <Tab key={index}>
            {({ selected }) => (
              <Heading
                className={`${
                  selected ? "opacity-100" : "opacity-60 before:opacity-0"
                }
									 relative w-72 font-normal before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:bg-brand-blue  before:content-['']`}
                level={2}
              >
                {tab}
              </Heading>
            )}
          </Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {content.map((content, index) => (
          <Tab.Panel key={index}>{content}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

export default Tabs;
