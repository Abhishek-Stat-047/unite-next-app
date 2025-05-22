import { Card, CardHeader, CardBody } from "@heroui/react";
import React from "react";
import Image from "next/image";

import Typography from "../common/Typography";

import { ETLFeatureType } from "@/types";

const ETLFeatureCard = ({
  alt,
  description,
  heading,
  image,
}: ETLFeatureType) => {
  return (
    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <Image alt={alt} className="mb-9" height={50} src={image} width={50} />
        <Typography className="mb-3" variant="subheading">
          {heading}
        </Typography>
        <Typography variant="text">{description}</Typography>
      </CardHeader>
      <CardBody className="overflow-visible py-2" />
    </Card>
  );
};

export default ETLFeatureCard;
