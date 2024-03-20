import samsung from "@/assets/brands/samsung.svg";
import apple from "@/assets/brands/apple.svg";
import gucci from "@/assets/brands/gucci.svg";
import porsche from "@/assets/brands/porsche.svg";
import calvinKlein from "@/assets/brands/calvin-klein.svg";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export const BrandsPage = () => {
  return (
    <Marquee className="bg-black p-4 md:p-8" autoFill={true} speed={30}>
      <div className="h-fit px-8 md:px-14">
        <Image src={samsung} alt="samsung" />
      </div>
      <div className="h-fit px-8 md:px-14">
        <Image src={apple} alt="apple" />
      </div>
      <div className="h-fit px-8 md:px-14">
        <Image src={gucci} alt="gucci" />
      </div>
      <div className="h-fit px-8 md:px-14">
        <Image src={porsche} alt="porsche" />
      </div>
      <div className="h-fit px-8 md:px-14">
        <Image src={calvinKlein} alt="calvinKlein" />
      </div>
    </Marquee>
  );
};
