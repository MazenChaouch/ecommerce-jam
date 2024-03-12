import Image from "next/image";
import msi from "../../assets/msi.png";
import star from "../../assets/star.svg";
import { Button } from "@/components/ui/button";
export const Hero = () => {
  return (
    <div className="flex w-full bg-stone-200 shadow-inner">
      <div className="container flex items-center justify-between space-x-7 py-20">
        <div className="w-1/2 space-y-5">
          <h1 className="font-Integral mb-5 text-7xl font-bold">
            NEW Collection 2025 of msi !
          </h1>
          <p className="font-Satoshi text-xl">
            MSI&apos;s 2025 gaming laptop collection revolutionizes portable
            gaming with cutting-edge technology and sleek design. Featuring
            next-gen processors and graphics cards,{" "}
          </p>
          <Button className="font-Satoshi rounded-full px-20 py-7 text-lg">
            Shop Now
          </Button>
          <div className="flex h-full space-x-5">
            <div className="flex flex-col">
              <p className="font-Satoshi text-4xl font-bold">680HZ</p>
              <p className="font-Satoshi text-lg">High Refresh Rate</p>
            </div>
            <div className="flex h-full w-[2px] flex-grow flex-col bg-stone-500" />
            <div className="flex flex-col">
              <p className="font-Satoshi text-4xl font-bold">6080 NTX</p>
              <p className="font-Satoshi text-lg">High Quality Graphics</p>
            </div>
            <div className="flex h-full w-[2px] flex-grow flex-col bg-stone-500" />
            <div className="flex flex-col">
              <p className="font-Satoshi text-4xl font-bold">I9 20TH</p>
              <p className="font-Satoshi text-lg">Speed and quick!</p>
            </div>
          </div>
        </div>
        <div className="relative w-1/2">
          <Image src={star} alt="star1" className="absolute top-1/2 w-12" />
          <Image
            src={star}
            alt="star1"
            className="absolute -top-10 right-5 w-24"
          />
          <Image src={msi} alt="hero" className="w-full" />
        </div>
      </div>
    </div>
  );
};
