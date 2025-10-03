import clsx from "clsx";
import { ButtonProps } from "./type";

export const Button = (props: ButtonProps) => {
  const {
    children,
    onClick,
    type = "button",
    disabled = false,
    isLoading = false,
    className: extendedClassName,
    variant = "primary",
    justifyContent = "justify-center",
    radius = "rounded-lg lg:rounded-lg focus:rounded-lg",
    size = "md",
    ...rest
  } = props;

  const variantClass = () => {
    switch (variant) {
      case "primary":
        return "bg-primary-100 text-background hover:bg-primary-100/90 focus-visible:ring-2 focus-visible:ring-foreground/30";
      case "secondary":
        return "bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:ring-2 focus-visible:ring-foreground/20";
      case "neutral":
        return "bg-background text-foreground border-0 border-foreground/20 hover:bg-background/80 focus-visible:ring-2 focus-visible:ring-foreground/10";
      case "danger":
        return "bg-[#FB0E0E] text-background hover:bg-[#F44616] focus-visible:ring-2 focus-visible:ring-red-300";
      case "transparent":
        return "bg-foreground/5 hover:bg-foreground/10";
      case "dropdowns":
        return "bg-background text-foreground hover:bg-foreground/20";
      default:
        return "bg-background text-foreground border border-foreground/30 hover:bg-foreground/5";
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
    <button
      type={type}
      onClick={onClick}
      disabled={isLoading || disabled}
      className={clsx(
        "transition-all duration-300 ease-in-out  lg:focus:outline-2 font-medium  text-base text-center flex items-center focus:outline-offset-2",
        justifyContent,
        radius,
        variantClass(),
        extendedClassName,
        getPaddingFromBtnSize(),
      )}
      {...rest}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v1a7 7 0 00-7 7h1z"
            ></path>
          </svg>{" "}
          Please&nbsp;wait...
        </div>
      ) : (
        children
      )}
    </button>
  );
};
