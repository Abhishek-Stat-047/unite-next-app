import Image from "next/image";

import { logo, logoText } from "@/public";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image alt="Unite logo" src={logo} />
      <Image alt="Unite logo" className="mb-3" src={logoText} />
    </div>
  );
};

export default Logo;
