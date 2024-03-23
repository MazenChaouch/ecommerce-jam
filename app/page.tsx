import { Separator } from "@/components/separator";
import { BrandsPage } from "./_components/brands";
import { CategoriesPage } from "./_components/categories";
import { Footer } from "./_components/footer";
import { HeroPage } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { NewArrivalsPage } from "./_components/newArrivals";
import { Testimonials } from "./_components/testimonials";
import { TopSellingPage } from "./_components/topSelling";

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
