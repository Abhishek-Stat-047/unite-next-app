import React from "react";
import { Card } from "@heroui/react";
import Image from "next/image";

import { ImageType } from "@/types";

const LogoCard = ({ src, alt }: ImageType) => {
  return (
    <div className="py-2">
      <Card className="w-[90px] h-[90px] grid place-items-center" shadow="sm">
        <Image alt={alt} height={50} src={src} />
      </Card>
    </div>
  );
};

export default LogoCard;
