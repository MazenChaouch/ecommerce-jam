import Image from "next/image";
import React from "react";

export const CardProduct = (product: {
  name: string;
  price: number;
  image: any;
}) => {
  return (
    <div className="h-fit w-fit space-y-2 overflow-hidden">
      <div className="overflow-hidden rounded-xl bg-stone-200 p-4">
        <Image
          src={product.image}
          alt={product.name}
          className="h-28 w-28 object-cover transition-transform duration-500 ease-in-out hover:scale-110 sm:h-56 sm:w-56 lg:h-72 lg:w-72"
        />
      </div>
      <div className="font-Satoshi text-sm font-bold md:text-lg">
        {product.name}
      </div>
      <div className="font-Satoshi font-bold md:text-xl">
        {product.price} DT
      </div>
    </div>
  );
};
