import React from "react";

export type Variants =
  | "heading"
  | "heading2"
  | "subheading"
  | "text"
  | "text-semibold"
  | "body"
  | "subtitle"
  | "normal"
  | "link"
  | "body-light"
  | "base-normal"
  | "h3"
  | "h4"
  | "h5"
  | "h6";

type TypographyProps = {
  variant: Variants;
  children: React.ReactNode;
  useLight?: boolean;
  className?: string;
};

type ComponentRenderedProps = {
  type: Variants;
  className?: string;
  children: React.ReactNode;
};

const light = {
  baseStyles: "text-foreground-200",
  variantStyles: {
    heading: "text-4xl font-extrabold leading-tight md:text-5xl", // main heading
    heading2: "text-xl font-semibold leading-tight md:text-2xl tracking-[4px]", // Title
    subheading: "font-semibold leading-snug md:text-sm", // sub heading
    "text-semibold": "font-semibold text-sm", // text
    text: "text-sm", // text
    body: "text-sm",
    "body-light": "text-md [&]:leading-loose md:text-lg font-normal",
    subtitle:
      "text-lg font-medium text-foreground-300 md:text-2xl [&]:leading-loose",
    normal: "text-sm text-foreground-300 md:text-base [&]:leading-loose",
    "base-normal": "text-foreground-300 text-base [&]:leading-loose",
    link: "text-sm md:text-base text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-primary-700 hover:underline hover:cursor-pointer hover:text-primary-500 [&]:leading-loose",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
  },
};
const dark = {
  baseStyles: "text-slate-800 dark:text-slate-200",
  variantStyles: {
    heading: "text-4xl font-extrabold leading-tight md:text-5xl", // main heading
    heading2: "text-xl font-semibold leading-tight md:text-2xl", // Title
    subheading: "font-semibold leading-snug text-base", // sub heading
    "text-semibold": "font-semibold text-sm", // text
    text: "text-base text-gray-900", // text
    subtitle:
      "text-lg font-medium text-slate-700 dark:text-slate-400 md:text-2xl",
    body: "text-md [&]:leading-loose md:text-lg",
    "body-light":
      "text-md [&]:leading-loose md:text-lg font-normal text-zinc-500 ",
    normal:
      "text-sm text-zinc-500 dark:text-slate-300 md:text-base [&]:leading-loose",
    "base-normal":
      "text-zinc-500 dark:text-slate-300 md:text-base [&]:leading-loose",
    link: "text-sm md:text-base text-zinc-500 transition-colors duration-300 dark:text-slate-300 dark:hover:text-primary-700 hover:underline hover:cursor-pointer hover:text-primary-500 [&]:leading-loose",
    h3: "",
    h4: "",
    h5: "",
    h6: "",
  },
};

const DynamicComponent = ({
  type,
  className,
  children,
}: ComponentRenderedProps) => {
  switch (type) {
    case "heading":
      return <h1 className={className}>{children}</h1>;
    case "heading2":
      return <h3 className={className}>{children}</h3>;
    case "subheading":
      return <h6 className={className}>{children}</h6>;
    case "body":
    case "subtitle":
    case "normal":
    case "link":
    case "body-light":
    case "base-normal":
    case "h3":
    case "h4":
    case "h5":
    case "h6":
    default:
      return <p className={className}>{children}</p>;
  }
};
const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
  useLight = false,
}) => {
  const variantStyles = useLight ? light.variantStyles : dark.variantStyles;
  const baseStyles = useLight ? light.baseStyles : dark.baseStyles;

  return (
    <DynamicComponent
      className={`${baseStyles} ${variantStyles[variant]} ${className || ""} `}
      type={variant}
    >
      {children}
    </DynamicComponent>
  );
};

export default Typography;
