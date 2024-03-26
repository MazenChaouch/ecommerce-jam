import { Separator } from "@/components/separator";
import { BrandsPage } from "./_sections/home/brands";
import { CategoriesPage } from "./_sections/home/categories";
import { Footer } from "./_sections/global/footer";
import { HeroPage } from "./_sections/home/hero";
import { Navbar } from "./_sections/global/navbar";
import { NewArrivalsPage } from "./_sections/home/newArrivals";
import { Testimonials } from "./_sections/home/testimonials";
import { TopSellingPage } from "./_sections/home/topSelling";

const Home = () => {
  return (
    <>
      <main className="h-full w-full">
        <Navbar />
        <HeroPage />
        <BrandsPage />
        <NewArrivalsPage />
        <Separator />
        <TopSellingPage />
        <CategoriesPage />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default Home;
