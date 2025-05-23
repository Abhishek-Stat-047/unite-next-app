import { Card } from "@heroui/react";
import React from "react";
import Image from "next/image";

import Typography from "../common/Typography";

import { ImageType } from "@/types";

interface ETLProcessCardProps extends ImageType {
  heading: string;
  description: string;
}

const ETLProcessCard = ({
  src,
  alt,
  heading,
  description,
}: ETLProcessCardProps) => {
  return (
    <Card className="md:w-[500px] p-10" shadow="sm">
      <Image
        alt={alt}
        className=" object-contain w-full md:h-[300px]"
        src={src}
      />
      <Typography className="mt-10 " variant="heading2">
        {heading}
      </Typography>
      <Typography className="mt-2 " variant="text">
        {description}
      </Typography>
    </Card>
  );
};

export default ETLProcessCard;
