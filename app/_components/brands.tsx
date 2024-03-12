import samsung from "@/assets/brands/samsung.svg";
import apple from "@/assets/brands/apple.svg";
import gucci from "@/assets/brands/gucci.svg";
import porsche from "@/assets/brands/porsche.svg";
import calvinKlein from "@/assets/brands/calvinKlein.svg";
import Image from "next/image";
export const Brands = () => {
  return (
    <div className=" bg-black">
      <div className="container flex h-32 w-full items-center justify-between">
        <Image src={samsung} alt="samsung" />
        <Image src={apple} alt="apple" />
        <Image src={gucci} alt="gucci" />
        <Image src={porsche} alt="porsche" />
        <Image src={calvinKlein} alt="calvinKlein" />
      </div>
    </div>
  );
};
