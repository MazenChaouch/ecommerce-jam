import { CardProduct } from "@/components/cardProduct";
import { Products } from "@/app/content";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const NewArrivalsPage = () => {
  return (
    <div className="flex h-fit w-full">
      <div className="container space-y-16 py-24">
        <div className="text-center font-Integral text-5xl font-bold">
          New Arrivals
        </div>
        <ListProducts />
        <div className="flex justify-center">
          <Button
            variant={"outline"}
            className="rounded-full px-20 py-7 font-Satoshi text-lg"
            asChild
          >
            <Link href="#">View All</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export const ListProducts = () => {
  return (
    <div className="flex flex-wrap justify-around gap-10 self-center p-4">
      {Products.map(
        (product: { name: string; price: number; image: any }, index) => (
          <CardProduct
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ),
      )}
    </div>
  );
};
