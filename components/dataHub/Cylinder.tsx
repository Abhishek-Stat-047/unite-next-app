import clsx from "clsx";
import Image from "next/image";

interface CylinderProps {
  image: string;
  alt: string;
}

const Cylinder = ({ image, alt }: CylinderProps) => {
  return (
    <div className={clsx("cylinder icon-container", {})}>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="absolute w-[80px] h-12 flex items-center justify-center -top-5">
          {/* <GradientTriangle /> */}
          <div className="relative w-[140px] h-[90px] overflow-hidden">
            <div
              className="absolute inset-0 bottom-7"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 70% 100%, 30% 100%)",
                background:
                  "linear-gradient(180deg, #d9dee6 0%, rgba(173, 196, 247, 0) 100%)",
              }}
            />
            <Image
              alt={alt}
              className="icon-float absolute bottom-7 left-5"
              src={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cylinder;
