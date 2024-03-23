import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import mail from "@/assets/mail.svg";
export const NewsLetter = () => {
  return (
    <div className="relative h-fit w-full pt-4">
      <div className="absolute top-0 -z-10 h-1/2 w-full bg-white" />
      <div className="absolute bottom-0 -z-10 h-1/2 w-full bg-stone-200" />
      <div className="container">
        <div className="flex items-center justify-between rounded-3xl bg-black px-12 py-8 max-lg:flex-col max-lg:space-y-4">
          <div className="flex flex-col space-y-1 font-Integral text-xl font-bold text-white md:text-4xl">
            <p>STAY UPTO DATE ABOUT</p>
            <p>OUR LATEST OFFERS</p>
          </div>
          <div className="flex flex-col space-y-3 max-md:w-full">
            <div className="flex items-center space-x-4 rounded-full bg-stone-100 px-4 py-2 max-md:w-full lg:py-3">
              <Image src={mail} alt="email" />
              <input
                type="text"
                placeholder="Enter your email address"
                className="bg-transparent text-xs focus:outline-none max-md:w-full sm:placeholder:text-sm"
              />
            </div>
            <Button
              variant={"secondary"}
              className="rounded-full px-16 py-2 font-Satoshi text-xs max-md:w-full sm:px-20 sm:py-6 sm:text-sm"
            >
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
