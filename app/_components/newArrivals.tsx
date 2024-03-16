import { NewProducts } from "@/app/content";
import { FeaturedProducts } from "@/components/featuredProducts";
export const NewArrivalsPage = () => {
  return (
    <FeaturedProducts title="New Arrivals" products={NewProducts} link="#" />
  );
};
