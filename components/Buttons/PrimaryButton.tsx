import { Button, ButtonProps } from "@heroui/react";
import clsx from "clsx";

interface PrimaryButtonProps extends ButtonProps {
  variant?: "solid" | "bordered"; // add variant prop
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className,
  variant = "solid",
  ...rest
}) => {
  return (
    <Button
      className={clsx(
        variant === "solid"
          ? "bg-[#3B6ED3] hover:bg-[#3B6ED3] text-white font-bold px-5"
          : "border bg-white border-[#1E4BA4] text-primaryBlue-300 hover:bg-[#3B6ED3] hover:text-white   px-5",
        "rounded-full",
        className
      )}
      radius="full"
      {...rest}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
