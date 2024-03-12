import { Brands } from "./_components/brands";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="h-fit w-full">
        <Hero />
        <Brands />
      </main>
    </>
  );
};

export default Home;
