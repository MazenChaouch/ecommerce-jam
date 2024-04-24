import Image from "next/image";
import { Categories } from "../../content";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CategoriesPage = () => {
  const groupedCategories = [];

  let y = 0;
  for (let i = 0; i < Categories.length; i += 2) {
    {
      y % 2 == 0
        ? groupedCategories.push(
            <div key={i} className="flex gap-10 max-lg:flex-col">
              <Link
                href={Categories[i].link}
                className="flex h-64 justify-between overflow-hidden rounded-3xl bg-white max-lg:flex-col lg:h-96 lg:w-5/12"
              >
                <div className="p-4 font-Satoshi text-2xl font-bold max-lg:text-center lg:p-8 lg:text-4xl">
                  {Categories[i].name}
                </div>
                <Image
                  src={Categories[i].image}
                  alt={Categories[i].name}
                  className="h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110 lg:object-left-top lg:pt-8"
                />
              </Link>
              {Categories[i + 1] && (
                <Link
                  href={Categories[i + 1].link}
                  className="flex h-64 justify-between overflow-hidden rounded-3xl bg-white max-lg:flex-col lg:h-96 lg:w-7/12"
                >
                  <div className="p-4 font-Satoshi text-2xl font-bold max-lg:text-center lg:p-8 lg:text-4xl">
                    {Categories[i + 1].name}
                  </div>
                  <Image
                    src={Categories[i + 1].image}
                    alt={Categories[i + 1].name}
                    className="h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110 lg:object-left-top lg:pt-8"
                  />
                </Link>
              )}
            </div>,
          )
        : groupedCategories.push(
            <div key={i} className="flex gap-10 max-lg:flex-col">
              <Link
                href={Categories[i].link}
                className="flex h-64 justify-between overflow-hidden rounded-3xl bg-white max-lg:flex-col lg:h-96 lg:w-7/12"
              >
                <div className="p-4 font-Satoshi text-2xl font-bold max-lg:text-center lg:p-8 lg:text-4xl">
                  {Categories[i].name}
                </div>
                <Image
                  src={Categories[i].image}
                  alt={Categories[i].name}
                  className="h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110 lg:object-left-top lg:pt-8"
                />
              </Link>
              {Categories[i + 1] && (
                <Link
                  href={Categories[i + 1].link}
                  className="flex h-64 justify-between overflow-hidden rounded-3xl bg-white max-lg:flex-col lg:h-96 lg:w-5/12"
                >
                  <div className="p-4 font-Satoshi text-2xl font-bold max-lg:text-center lg:p-8 lg:text-4xl">
                    {Categories[i + 1].name}
                  </div>
                  <Image
                    src={Categories[i + 1].image}
                    alt={Categories[i + 1].name}
                    className="h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-110 lg:object-left-top lg:pt-8"
                  />
                </Link>
              )}
            </div>,
          );
    }
    y++;
  }

  return (
    <div className="h-fit w-full p-4 lg:p-8">
      <div className="container space-y-16 rounded-2xl bg-stone-200 p-6 lg:rounded-[40px] lg:p-16">
        <div className="mt-10 text-center font-Integral text-2xl font-bold uppercase md:text-5xl">
          Browse By Categories
        </div>
        {groupedCategories}
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
