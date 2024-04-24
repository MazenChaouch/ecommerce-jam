"use client";
import Image from "next/image";
import rateIcon from "../assets/rating.svg";

interface RatingProps {
  rating: number;
  titled?: boolean;
}

export const Rating = ({ rating, titled }: RatingProps) => {
  const rate = Math.floor(rating);
  const partial = rating - rate;
  return (
    <div className="flex items-center">
      <div className="flex h-fit ">
        {[...Array(rate)].map((_, index) => (
          <Image
            key={index}
            src={rateIcon}
            alt="rating"
            className="mr-0.5 h-4 w-4 md:h-6 md:w-6"
          />
        ))}
        {partial > 0 && (
          <Image
            src={rateIcon}
            alt="rating"
            className="mr-0.5 h-4 w-4 md:h-6 md:w-6"
            style={{
              clipPath: `inset(0 ${20 - partial * 20}px 0 0)`,
            }}
          />
        )}
      </div>

      {titled && (
        <div className="mx-2 flex">
          <span className="text-xs md:text-lg">{rating}</span>
          <span className="text-xs text-stone-400 md:text-lg">/5</span>
        </div>
      )}
    </div>
  );
};
