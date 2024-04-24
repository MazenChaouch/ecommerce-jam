"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "@/assets/jam_black.svg";
import search from "@/assets/search.svg";
import account from "@/assets/account.svg";
import cart from "@/assets/cart.svg";
import menu from "@/assets/menu.svg";
import searchBlack from "@/assets/search-black.svg";
import { Navlink } from "./navlinks";
import { Button } from "@/components/ui/button";
import { Navlinks, Shop } from "@/app/content";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const Navbar = () => {
  const nav = useRef(null);
  const [fix, setFix] = useState("sticky");
  const [show, setShow] = useState(false);
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        setFix("fixed");
      } else {
        setFix("sticky");
      }
    };
  }
  return (
    <>
      <div
        className={`top-0 z-20 h-fit w-full bg-white py-5 font-Satoshi shadow ${fix} transition-all duration-300`}
        ref={nav}
      >
        <div
          className={`${show ? "visible opacity-100" : "invisible h-0 opacity-0"} transition-opacity duration-150`}
        >
          <NavbarMobile />
        </div>
        <div className="container flex items-center justify-between gap-4 lg:gap-10 lg:py-2">
          <Button variant={"link"} className="m-0 h-fit w-fit p-0 lg:hidden">
            <Image
              src={menu}
              alt="menu"
              className="min-h-6 min-w-6 "
              onClick={() => {
                setShow((prev) => !prev);
              }}
            />
          </Button>
          <div className="flex min-h-6 min-w-24 max-lg:max-w-36">
            <Link href={"/home"}>
              <Image src={logo} alt="logo" />
            </Link>
          </div>

          <div className="max-lg:hidden">
            <Navlink />
          </div>
          <div className="flex flex-grow items-center space-x-4 rounded-full bg-stone-100 px-4 py-2 max-lg:hidden lg:py-3">
            <Image src={search} alt="search" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-transparent placeholder:text-sm focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-2 lg:space-x-4">
            <button>
              <Image
                src={searchBlack}
                alt="search"
                className="min-h-6 min-w-6 lg:hidden"
              />
            </button>
            <button>
              <Image src={cart} alt="cart" className="min-h-6 min-w-6" />
            </button>
            <button>
              <Image src={account} alt="account" className="min-h-6 min-w-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const NavbarMobile = () => {
  return (
    <div className="flex h-fit w-full flex-col items-center justify-center bg-white pb-5 transition-all duration-300">
      <div className="container mx-auto flex flex-col items-center justify-center ">
        <div className="flex h-fit w-full flex-col gap-4 ">
          {Navlinks.map((component, index) => (
            <Link
              href={component.link}
              key={index}
              className="text-sm font-medium text-black hover:underline"
            >
              {component.name}
            </Link>
          ))}
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="shop" className="">
            <AccordionTrigger className="text-sm">Shop</AccordionTrigger>
            {Shop.map(
              (
                component: {
                  title: string;
                  href: string;
                  description: string;
                },
                index,
              ) => (
                <AccordionContent key={index}>
                  <Link href={component.href} className="text-sm">
                    {component.title}
                  </Link>
                </AccordionContent>
              ),
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
