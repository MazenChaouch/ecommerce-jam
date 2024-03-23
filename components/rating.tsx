"use client";
import Image from "next/image";
import rateIcon from "../assets/rating.svg";
import { useEffect, useState } from "react";

interface RatingProps {
  rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
  const [starWidth, setStarWidth] = useState(24);
  const [starParts, setStarParts] = useState<{ full: number; partial: number }>(
    { full: 0, partial: 0 },
  );

  useEffect(() => {
    const fullStars = Math.floor(rating);
    const decimalPart = rating - fullStars;

    setStarParts({ full: fullStars, partial: decimalPart });
  }, [rating]);

  const starElements = [];
  for (let i = 0; i < starParts.full; i++) {
    starElements.push(
      <div key={i} className={`w-${starWidth} h-${starWidth}`}>
        <Image
          src={rateIcon}
          alt="rating"
          className="h-full w-full object-cover"
        />
      </div>,
    );
  }

  if (starParts.partial > 0) {
    starElements.push(
      <div
        key={5}
        className={`w-[${starWidth * starParts.partial}px] h-${starWidth} overflow-hidden`}
      >
        <Image
          src={rateIcon}
          alt="rating"
          className="h-full w-full object-cover"
        />
      </div>,
    );
  }

  return <div className="flex h-fit overflow-hidden">{starElements}</div>;
};
