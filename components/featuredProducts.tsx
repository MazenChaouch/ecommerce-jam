import Link from "next/link";
import { Button } from "./ui/button";
import { CardProduct } from "./cardProduct";

type product = { name: string; price: number; image: any };
interface FeturedProductsProps {
  title: string;
  products: product[];
  link: string;
}

export const FeaturedProducts = ({
  title,
  products,
  link,
}: FeturedProductsProps) => {
  return (
    <div className="flex h-fit w-full">
      <div className="container space-y-12 px-0 py-24">
        <div className="text-center font-Integral text-3xl font-bold md:text-5xl">
          {title}
        </div>
        <ListProducts Products={products} />
        <div className="flex justify-center">
          <Button
            variant={"outline"}
            className="rounded-full px-16 py-6 font-Satoshi text-lg sm:px-20 sm:py-7"
            asChild
          >
            <Link href={link}>View All</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export const ListProducts = ({ Products }: { Products: product[] }) => {
  return (
    <div className="flex flex-wrap justify-around p-4 ">
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
