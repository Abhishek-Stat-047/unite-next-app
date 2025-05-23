import { StaticImageData } from "next/image";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type HeadingSegments = {
  text: string;
  color?: string;
};

export type ETLFeatureType = {
  image: string;
  alt: string;
  heading: string;
  description: string;
};

export type ImageType = {
  src: string | StaticImageData;
  alt: string;
};

export interface FAQAccordionTypes {
  heading: HeadingSegments[];
  description: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}
