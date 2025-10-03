"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TabLinkItem } from "./tab-link-item";
import { usePathname } from "next/navigation";
import { Button } from "../button";

interface Tab {
  name: string;
  href: string;
}

export const TabLinks = ({ tabs }: { tabs: Tab[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    // On mount, grab the current hash
    if (typeof window !== "undefined") {
      setHash(window.location.hash); // includes the “#”
    }

    const onHashChange = () => {
      setHash(window.location.hash);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const activeTab = tabs.find((tab) => {
    const tabHash = tab.href.startsWith("#") ? tab.href : `#${tab.href}`;

    return tabHash === hash;
  });

  const activeTabName = activeTab?.name || tabs[0]?.name || "Menu";

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex lg:items-center lg:justify-center gap-4 lg:gap-[100px] justify-start flex-wrap pb-[15px] border-b border-b-[#999999]">
        {tabs?.map((item, index: number) => (
          <li key={index}>
            <TabLinkItem
              item={item}
              isActive={item.href === hash}
              onClickAction={() => setHash(item.href)}
            />
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between">
          <span className="text-primary-100 font-semibold text-base uppercase tracking-wide">
            {activeTabName}
          </span>

          {/* Hamburger/Close Button */}
          <Button
            onClick={toggleMenu}
            variant="neutral"
            className="!relative bg-secondary-500 w-6 h-6 flex flex-col justify-center items-center focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-primary-100"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-primary-100"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
              transition={{ duration: 0.3 }}
              className="absolute w-6 h-0.5 bg-primary-100"
            />
          </Button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <ul className="flex flex-col py-2 bg-gray-50 rounded-lg mt-4">
                {tabs?.map((item, index: number) => (
                  <li key={index} onClick={() => setIsOpen(false)}>
                    <TabLinkItem
                      item={item}
                      isMobile
                      isActive={item.href === hash}
                      onClickAction={() => setHash(item.href)}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
