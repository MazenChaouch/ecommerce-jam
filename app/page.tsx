import { BrandsPage } from "./_components/brands";
import { CategoriesPage } from "./_components/categories";
import { HeroPage } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { NewArrivalsPage } from "./_components/newArrivals";
import { Testimonials } from "./_components/testimonials";
import { TopSellingPage } from "./_components/topSelling";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="">
        <HeroPage />
        <BrandsPage />
        <NewArrivalsPage />
        <div className="container mx-auto h-[1px] rounded-full bg-stone-300/50" />
        <TopSellingPage />
        <CategoriesPage />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
