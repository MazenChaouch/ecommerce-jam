import Image from "next/image";
import { Button } from "@/components/ui/button";
import star from "@/assets/star.svg";
import { Hero } from "../content";
import Link from "next/link";
export const HeroPage = () => {
  return (
    <div className="flex w-full bg-stone-200 shadow-inner">
      <div className="container flex items-center justify-between gap-10 py-20 max-md:flex-wrap">
        <div className="flex flex-col space-y-5 md:w-1/2">
          <h1 className="mb-5 text-balance font-Integral text-5xl font-bold md:text-7xl">
            {Hero.title}
          </h1>
          <p className="font-Satoshi md:text-xl">{Hero.description}</p>

          <Button
            className="rounded-full px-14 py-5 font-Satoshi text-lg md:px-20 md:py-7"
            asChild
          >
            <Link href={Hero.link}>Shop Now</Link>
          </Button>
          <div className="flex h-full items-center space-x-5">
            {Hero.specs.map((spec, index) => (
              <>
                <div key={index} className="flex flex-col">
                  <p className="font-Satoshi text-lg font-bold md:text-4xl">
                    {spec.name}
                  </p>
                  <p className="font-Satoshi md:text-lg">{spec.description}</p>
                </div>
                {index !== Hero.specs.length - 1 && (
                  <div className="flex w-[2px] flex-col rounded-full bg-stone-500/30 py-6" />
                )}
              </>
            ))}
          </div>
        </div>
        <div className="relative flex flex-grow md:w-1/2">
          <Image
            src={star}
            alt="star1"
            className="absolute top-1/2 w-8 md:w-12"
          />
          <Image
            src={star}
            alt="star1"
            className="absolute -top-10 right-5 w-16 md:w-24"
          />
          <Image src={Hero.image} alt="hero" className="w-full" />
        </div>
      </div>
    </div>
  );
};
