import clsx from "clsx";
import { NavItem } from "@/interfaces/global";
import Link from "next/link";

type NavBarItemProps = {
  item: NavItem;
  onClick: Function;
};

export const NavBarItem = ({ item, onClick }: NavBarItemProps) => {
  return (
    <li className={clsx("relative")}>
      <Link
        href={item.href}
        onClick={() => onClick()}
        className={clsx(
          "w-full flex items-center duration-300 ease-in-out focus:outline-none text-primary-100 hover:text-primary-200 font-bold whitespace-nowrap",
        )}
      >
        <span className="text-base font-regular">{item.name}</span>
      </Link>
    </li>
  );
};
