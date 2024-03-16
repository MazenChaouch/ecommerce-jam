import { TopProducts } from "@/app/content";
import { FeaturedProducts } from "@/components/featuredProducts";
export const TopSellingPage = () => {
  return (
    <FeaturedProducts title="Top Selling" products={TopProducts} link="#" />
  );
};
