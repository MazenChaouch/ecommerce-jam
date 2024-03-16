import samsung from "@/assets/brands/samsung.svg";
import apple from "@/assets/brands/apple.svg";
import gucci from "@/assets/brands/gucci.svg";
import porsche from "@/assets/brands/porsche.svg";
import calvinKlein from "@/assets/brands/calvin-klein.svg";
import Image from "next/image";
export const BrandsPage = () => {
  return (
    <div className=" bg-black">
      <div className="container flex h-fit w-full flex-wrap items-center justify-around py-4">
        <div className="flex flex-grow">
          <Image src={samsung} alt="samsung" />
        </div>
        <div className="flex flex-grow">
          <Image src={apple} alt="apple" />
        </div>
        <div className="flex flex-grow">
          <Image src={gucci} alt="gucci" />
        </div>
        <div className="flex flex-grow">
          <Image src={porsche} alt="porsche" />
        </div>
        <div className="flex flex-grow">
          <Image src={calvinKlein} alt="calvinKlein" />
        </div>
      </div>
    </div>
  );
};
