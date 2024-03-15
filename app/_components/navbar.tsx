"use client";
import Image from "next/image";
import React from "react";
import logo from "../../assets/jam_black.svg";
import search from "../../assets/search.svg";
import account from "../../assets/account.svg";
import cart from "../../assets/cart.svg";
import { Navlink } from "./navlinks";
export const Navbar = () => {
  return (
    <>
      <div className="z-10 w-full bg-transparent py-5 font-Satoshi shadow-2xl ">
        <div className="container flex items-center justify-between gap-10 py-2 ">
          <Image
            src={logo}
            alt="logo"
            className="h-[18px] w-[147.75px] md:h-[24px] md:w-[197px]"
          />
          <Navlink />
          <div className="flex flex-grow items-center space-x-4 rounded-full bg-stone-100 px-4 py-3">
            <Image src={search} alt="search" />
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4">
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
