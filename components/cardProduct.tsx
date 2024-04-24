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
    <div className="h-fit w-fit space-y-2">
      <div className="rounded-xl bg-stone-200 p-2">
        <Image
          src={product.image}
          alt={product.name}
          className="size-fit object-contain duration-500 ease-in-out hover:scale-110 sm:size-72"
        />
      </div>
      <div className="font-Satoshi font-bold md:text-lg">{product.name}</div>
      {product.rating && <Rating rating={product.rating} titled />}
      <div className="flex h-fit w-full space-x-1 lg:space-x-2">
        <div className="font-Satoshi text-sm font-bold md:text-xl">
          {product.price} DT
        </div>
        {product.oldPrice && (
          <div className="font-Satoshi text-sm font-semibold text-stone-400/90 line-through md:text-xl">
            {product.oldPrice} DT
          </div>
        )}
        {product.discount && (
          <div className="flex items-center rounded-xl bg-red-100 px-2">
            <span className="my-auto font-Satoshi text-[10px] font-medium text-red-500 md:text-xs">
              -{product.discount}%
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
