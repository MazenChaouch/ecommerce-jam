import Image from "next/image";
import { Categories } from "../content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const CategoriesPage = () => {
  return (
    <div className="h-fit">
      <div className="container space-y-16 rounded-[40px] bg-stone-200 p-16">
        <div className="mt-10 text-center font-Integral text-2xl font-bold uppercase md:text-5xl">
          Browse By Categories
        </div>
        <div className="flex gap-10">
          <div className="relative flex h-96 w-1/3 justify-between overflow-hidden rounded-3xl bg-white">
            <div className="p-8 font-Satoshi text-4xl font-bold">
              {Categories[0].name}
            </div>
            <Image
              src={Categories[0].image}
              alt={Categories[0].name}
              className="absolute right-0 h-full w-5/6 py-8 transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className="relative flex h-96 w-2/3 justify-between overflow-hidden rounded-3xl bg-white">
            <div className="p-8 font-Satoshi text-4xl font-bold">
              {Categories[1].name}
            </div>
            <Image
              src={Categories[1].image}
              alt={Categories[1].name}
              className="absolute right-0 h-full w-5/6 py-8 transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="relative flex h-96 w-2/3 justify-between overflow-hidden rounded-3xl bg-white">
            <div className="p-8 font-Satoshi text-4xl font-bold">
              {Categories[2].name}
            </div>
            <Image
              src={Categories[2].image}
              alt={Categories[2].name}
              className="absolute right-0 h-full w-4/6 py-8 transition-transform duration-500 ease-in-out hover:scale-110"
            />
          </div>
          <div className="relative flex h-96 w-1/3 justify-between overflow-hidden rounded-3xl bg-white">
            <div className="p-8 font-Satoshi text-4xl font-bold">
              {Categories[3].name}
            </div>
            <Image
              src={Categories[3].image}
              alt={Categories[3].name}
              className="absolute right-0 h-full w-5/6 py-8 transition-transform duration-500 ease-in-out hover:scale-110"
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
