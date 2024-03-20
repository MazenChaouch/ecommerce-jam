"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../../assets/jam_black.svg";
import search from "../../assets/search.svg";
import account from "../../assets/account.svg";
import cart from "../../assets/cart.svg";
import menu from "../../assets/menu.svg";
import { Navlink } from "./navlinks";
import { Button } from "@/components/ui/button";
export const Navbar = () => {
  const nav = useRef(null);
  const [flow, setFlow] = useState("");
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      if (window.pageYOffset > 100) {
        setFlow("fixed top-0");
      } else {
        setFlow("");
      }
    };
  }
  return (
    <>
      <div
        className={`z-10 w-full bg-white py-5 font-Satoshi shadow ${flow}`}
        ref={nav}
      >
        <div
          className={`container flex items-center justify-between gap-10 py-2`}
        >
          <Image
            src={logo}
            alt="logo"
            className="h-[18px] w-[147px] md:h-[24px] md:w-[197px]"
          />
          <Button variant={"link"} className="m-0 h-fit w-fit p-0">
            <Image src={menu} alt="menu" className="h- w-8 md:hidden" />
          </Button>

          <div className="max-md:hidden">
            <Navlink />
          </div>
          <div className="flex flex-grow items-center space-x-4 rounded-full bg-stone-100 px-4 py-2 max-md:hidden md:py-3">
            <Image src={search} alt="search" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-transparent placeholder:text-sm focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4 max-md:hidden">
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
export const NavbarMobile = () => {
  return (
    <div className="container max-md:hidden">
      <Navlink />
    </div>
  );
};
