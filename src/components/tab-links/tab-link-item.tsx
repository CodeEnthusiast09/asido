"use client";

import clsx from "clsx";
import Link from "next/link";

export const TabLinkItem = ({
  item,
  isMobile = false,
  isActive = false,
  onClickAction,
}: {
  item: { name: string; href: string };
  isMobile?: boolean;
  isActive?: boolean;
  onClickAction?: () => void;
}) => {
  if (isMobile) {
    return (
      <Link
        href={item?.href}
        onClick={onClickAction}
        className={clsx(
          "block px-4 py-3 text-sm font-bold transition-all duration-300",
          isActive
            ? "text-primary-200 font-bold"
            : "text-primary-100 hover:text-primary-500 hover:bg-white/50",
        )}
      >
        {item?.name}
      </Link>
    );
  }

  return (
    <div>
      <Link
        href={item?.href}
        onClick={onClickAction}
        className={clsx(
          "transition-all duration-300 text-base font-semibold",
          isActive
            ? "text-primary-200"
            : "hover:text-primary-200 text-primary-100",
        )}
      >
        {item?.name}
      </Link>
    </div>
  );
};
