import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

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
    <Card className="w-[90px] h-[90px] grid place-items-center" shadow="sm">
      <Image alt={alt} src={src} />
      <Typography variant="heading2">{heading}</Typography>
      <Typography variant="text">{description}</Typography>
    </Card>
  );
};

export default ETLProcessCard;
