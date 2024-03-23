"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import logo from "../../assets/jam_black.svg";
import search from "../../assets/search.svg";
import account from "../../assets/account.svg";
import cart from "../../assets/cart.svg";
import menu from "../../assets/menu.svg";
import searchBlack from "../../assets/search-black.svg";
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
        <div className="container flex items-center justify-between gap-4 lg:gap-10 lg:py-2">
          <Button variant={"link"} className="m-0 h-fit w-fit p-0">
            <Image
              src={menu}
              alt="menu"
              className="min-h-6 min-w-6 lg:hidden"
            />
          </Button>
          <div className="flex min-h-6 min-w-24 max-lg:max-w-36">
            <Image src={logo} alt="logo" />
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
export const NavbarMobile = () => {
  return (
    <div className="container max-lg:hidden">
      <Navlink />
    </div>
  );
};
