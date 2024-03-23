import Image from "next/image";
import { Categories } from "../content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const CategoriesPage = () => {
  return (
    <div className="h-fit w-full p-4 lg:p-8">
      <div className="container space-y-16 rounded-2xl bg-stone-200 p-6 lg:rounded-[40px] lg:p-16">
        <div className="mt-10 text-center font-Integral text-2xl font-bold uppercase md:text-5xl">
          Browse By Categories
        </div>
        <div className="flex gap-10 max-lg:flex-col">
          <div className="flex h-64 justify-between overflow-hidden rounded-3xl bg-white max-lg:flex-col lg:h-96 lg:w-5/12">
            <div className="p-4 font-Satoshi text-2xl font-bold max-lg:text-center lg:p-8 lg:text-4xl">
              {Categories[0].name}
            </div>
            <Image
              src={Categories[0].image}
              alt={Categories[0].name}
              className="h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110 lg:object-left-top lg:pt-8"
            />
          </div>
          <div className="flex h-64 justify-between overflow-hidden rounded-3xl bg-white max-lg:flex-col lg:h-96 lg:w-7/12">
            <div className="p-4 font-Satoshi text-2xl font-bold max-lg:text-center lg:p-8 lg:text-4xl">
              {Categories[1].name}
            </div>
            <Image
              src={Categories[1].image}
              alt={Categories[1].name}
              className="h-full object-cover object-center  transition-transform duration-500 ease-in-out hover:scale-110 lg:object-left-top lg:pt-8 "
            />
          </div>
        </div>
        <div className="flex gap-10 max-lg:flex-col">
          <div className="flex h-64 justify-between overflow-hidden rounded-3xl bg-white max-lg:flex-col lg:h-96 lg:w-7/12">
            <div className="p-4 font-Satoshi text-2xl font-bold max-lg:text-center lg:p-8 lg:text-4xl">
              {Categories[2].name}
            </div>
            <Image
              src={Categories[2].image}
              alt={Categories[2].name}
              className="h-full object-cover object-center  transition-transform duration-500 ease-in-out hover:scale-110 lg:object-left-top lg:pt-8 "
            />
          </div>
          <div className="flex h-64 justify-between overflow-hidden rounded-3xl bg-white max-lg:flex-col lg:h-96 lg:w-5/12">
            <div className="p-4 font-Satoshi text-2xl font-bold max-lg:text-center lg:p-8 lg:text-4xl">
              {Categories[3].name}
            </div>
            <Image
              src={Categories[3].image}
              alt={Categories[3].name}
              className="h-full object-cover object-center  transition-transform duration-500 ease-in-out hover:scale-110 lg:object-left-top lg:pt-8 "
            />
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            variant={"outline"}
            className="rounded-full px-16 py-6 font-Satoshi text-lg sm:px-20 sm:py-7"
            asChild
          >
            <Link href="#">View All</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
