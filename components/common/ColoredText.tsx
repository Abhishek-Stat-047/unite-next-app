import clsx from "clsx";

import Typography, { Variants } from "./Typography";

import { HeadingSegments } from "@/types";

type ColoredTextProps = {
  segments: HeadingSegments[];
  variant?: Variants;
  className?: string;
};

export default function ColoredText({
  segments,
  className = "",
  variant = "heading",
}: ColoredTextProps) {
  return (
    <Typography
      className={clsx("text-center md:text-left", className)}
      variant={variant}
    >
      {segments.map((segment, index) => (
        <span
          key={index}
          className={clsx("md:whitespace-pre-line", segment.color)}
        >
          {segment.text}
        </span>
      ))}
    </Typography>
  );
}
