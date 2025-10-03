"use client";

import { TabLinks } from "@/components/tab-links";

const subPages = [
  {
    name: "WHO WE ARE",
    href: `#whoweare`,
  },
  {
    name: "LEADERSHIP",
    href: `#leadership`,
  },
  {
    name: "OUR VOLUNTEER TEAM",
    href: `#volunteer`,
  },
  {
    name: "MILESTONES",
    href: `#milestone`,
  },
];

export const LayoutHeader = () => {
  return (
    <div className="bg-secondary-500 lg:bg-transparent px-4 lg:px-20 lg:pt-11 rounded-lg py-4">
      <TabLinks tabs={subPages} />
    </div>
  );
};
