import clx from "clsx";

import ColoredText from "./ColoredText";
import Typography from "./Typography";

import { HeadingSegments } from "@/types";

interface HeadingProps {
  heading: HeadingSegments[];
  description?: string;
  className?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  descriptionContainerClassName?: string;
  alignLeft?: boolean;
}

const Heading = ({
  heading,
  description,
  className,
  headingClassName,
  descriptionClassName,
  descriptionContainerClassName,
  alignLeft = false,
}: HeadingProps) => {
  return (
    <div
      className={clx(
        alignLeft ? "w-full ml-0 mr-0" : "md:w-[76%] mx-auto",
        className
      )}
    >
      <ColoredText
        className={clx(
          "!mb-4   md:whitespace-pre-line",
          alignLeft ? "!text-left" : "!text-center md:text-left",
          headingClassName
        )}
        segments={heading}
        variant="heading"
      />
      <div
        className={clx(
          alignLeft ? "w-full ml-0 mr-0" : "md:w-[94%] mx-auto",
          descriptionContainerClassName
        )}
      >
        <Typography
          className={clx(
            "!mb-0 md:whitespace-pre-line mt-6",
            alignLeft ? "!text-left" : "!text-center",
            descriptionClassName
          )}
          variant="text"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default Heading;
