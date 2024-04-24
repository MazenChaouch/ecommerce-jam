import Image from "next/image";
import { Button } from "@/components/ui/button";
import star from "@/assets/star.svg";
import { Hero } from "../../content";
import Link from "next/link";
export const HeroPage = () => {
  return (
    <div className="flex w-full  bg-stone-200 shadow-inner">
      <div className="container flex items-center justify-between gap-10 py-20 max-lg:flex-wrap-reverse">
        <div className="flex flex-col space-y-5 lg:w-1/2">
          <h1 className="mb-5 text-clip font-Integral text-4xl font-bold lg:text-7xl ">
            {Hero.title}
          </h1>
          <p className="font-Satoshi lg:text-xl">{Hero.description}</p>
          <Button
            className="rounded-full px-14 py-5 font-Satoshi text-lg lg:w-fit lg:px-20 lg:py-7"
            asChild
          >
            <Link href={Hero.link}>Shop Now</Link>
          </Button>
          <div className="flex h-full items-center justify-between space-x-2 pt-4 lg:space-x-5">
            {Hero.specs.map((spec, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col items-center justify-around text-center"
                >
                  <p className="w-full font-Satoshi text-lg font-bold lg:text-[40px]">
                    {spec.name}
                  </p>

                  <p className="flex w-full items-center justify-between font-Satoshi lg:text-lg">
                    {spec.description}
                  </p>
                </div>
                {index !== Hero.specs.length - 1 && (
                  <div className="flex w-[2px] flex-col rounded-full bg-stone-500/30 py-6" />
                )}
              </>
            ))}
          </div>
        </div>
        <div className="relative flex flex-grow lg:w-1/2">
          <Image
            src={star}
            alt="star1"
            className="absolute top-1/2 w-8 lg:w-12"
          />
          <Image
            src={star}
            alt="star1"
            className="absolute -top-10 right-5 w-16 lg:w-24"
          />
          <Image src={Hero.image} alt="hero" className="w-full" />
        </div>
      </div>
    </div>
  );
};
