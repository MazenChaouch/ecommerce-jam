import Image from "next/image";
import React from "react";

export const CardProduct = (product: {
  name: string;
  price: number;
  image: any;
}) => {
  return (
    <div className="h-fit w-fit space-y-2">
      <div className="overflow-hidden rounded-xl bg-stone-300 p-4">
        <div className="flex">
          <Image
            src={product.image}
            alt={product.name}
            className="h-64 w-64 transition-transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
      </div>
      <div className="font-Satoshi text-lg font-bold">{product.name}</div>
      <div className="font-Satoshi text-xl font-bold">{product.price} DT</div>
    </div>
  );
};
