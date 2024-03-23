"use client";
import { CardTestimonial } from "@/components/cardTestimonial";
import { Testimonial } from "../content";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import arrow from "@/assets/arrow.svg";
import { useCallback } from "react";
export const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  return (
    <div className="h-fit w-full py-4">
      <div className="container p-0">
        <div className="flex items-end justify-between pb-8 max-lg:px-8">
          <h1 className="font-Integral text-2xl font-bold text-stone-900 md:text-5xl">
            Our Happy Customers
          </h1>
          <div className="flex space-x-2">
            <button>
              <Image src={arrow} alt="arrowPrev" onClick={scrollPrev} />
            </button>
            <button className="rotate-180">
              <Image src={arrow} alt="arrowNext" onClick={scrollNext} />
            </button>
          </div>
        </div>
      </div>
      <div className="container overflow-hidden " ref={emblaRef}>
        <div className="flex ">
          {Testimonial.map((testimonial, index) => (
            <div key={index} className="ml-4">
              <CardTestimonial
                name={testimonial.name}
                comment={testimonial.comment}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
