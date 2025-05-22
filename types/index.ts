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
