import { BrandsPage } from "./_components/brands";
import { HeroPage } from "./_components/hero";
import { Navbar } from "./_components/navbar";
import { NewArrivalsPage } from "./_components/newArrivals";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="h-fit w-full">
        <HeroPage />
        <BrandsPage />
        <NewArrivalsPage />
      </main>
    </>
  );
};

export default Home;
