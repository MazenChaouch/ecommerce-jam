import Image from "next/image";
import React from "react";
import { Rating } from "./rating";
import { Badge } from "./ui/badge";

export const CardProduct = (product: {
  name: string;
  oldPrice?: number;
  price: number;
  rating?: number;
  discount?: number;
  image: any;
}) => {
  return (
    <div className="h-fit w-fit space-y-2 ">
      <div className="rounded-xl bg-stone-200 p-2 md:p-4">
        <Image
          src={product.image}
          alt={product.name}
          className="h-36 w-36 object-contain duration-500 ease-in-out hover:scale-110 max-[350px]:h-40 max-[350px]:w-40 sm:h-56 sm:w-56 lg:h-72 lg:w-72"
        />
      </div>
      <div className="font-Satoshi text-sm font-bold md:text-lg">
        {product.name}
      </div>
      {product.rating && <Rating rating={product.rating} titled />}
      <div className="flex h-fit w-full space-x-1 lg:space-x-2">
        <div className="font-Satoshi text-xs font-bold md:text-xl">
          {product.price} DT
        </div>
        {product.oldPrice && (
          <div className="font-Satoshi text-xs font-bold text-stone-500 line-through md:text-xl">
            {product.oldPrice} DT
          </div>
        )}
        {product.discount && (
          <div className="g:py-1 rounded-xl bg-red-100 px-2 py-0.5 font-Satoshi font-medium text-red-500 max-lg:text-[10px] lg:rounded-3xl lg:px-3">
            -{product.discount}%
          </div>
        )}
      </div>
    </div>
  );
};
