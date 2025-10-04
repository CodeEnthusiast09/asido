"use client";
import Link from "next/link";
import { ButtonProps } from "./type";
import { clsx } from "clsx";

export const LinkButton = (props: ButtonProps) => {
  const {
    children,
    onClick,
    href,
    className: extendedClassName,
    variant = "primary",
    justifyContent = "justify-center",
    size = "lg",
    radius = "rounded lg:rounded-md focus:rounded",
    target = "",
    ...rest
  } = props;

  const variantClass = () => {
    if (variant === "primary") {
      return "text-background bg-primary-100 hover:bg-primary-100/80 focus-visible:ring-2 focus-visible:ring-primary-200/20 border border-transparent";
    } else if (variant === "secondary") {
      return "text-background bg-primary-200 hover:text-primary-200 hover:bg-background/80 border-2 border-transparent hover:border-primary-200 focus-visible:ring-2 focus-visible:ring-primary-200/20";
    } else if (variant === "transparent") {
      return "bg-transparent border border-transparent focus:outline-primary-500";
    } else {
      return "text-dark bg-background hover:bg-primary-100 border border-[#D1D1D1]";
    }
  };

  const getPaddingFromBtnSize = () => {
    if (size === "sm") {
      return "px-1.5 lg:px-3 py-1.5 lg:py-2";
    } else if (size === "md") {
      return "px-4 lg:px-6 py-3";
    } else if (size === "lg") {
      return "px-3 lg:px-7 py-1.5 lg:py-3.5";
    } else {
      return "px-3 lg:px-5 py-1.5 lg:py-3.5";
    }
  };

  return (
    <>
      <Link
        href={href}
        target={target}
        onClick={(e) => {
          onClick?.(e);
        }}
        className={clsx(
          "transition-all duration-300 ease-in-out  focus:outline-2 text-center flex items-center focus:outline-offset-2",
          justifyContent,
          radius,
          variantClass(),
          getPaddingFromBtnSize(),
          extendedClassName,
        )}
        {...rest}
      >
        {children}
      </Link>
    </>
  );
};
