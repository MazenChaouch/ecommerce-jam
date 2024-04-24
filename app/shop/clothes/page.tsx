import { Navbar } from "@/app/_components/navbar";
import { BreadcrumbComp } from "./_components/breadcrumb";
import { ClothesContent } from "./_components/clothes-content";
import { Footer } from "@/app/_components/footer";

const ClothesPage = () => {
  return (
    <main className="h-full w-full">
      <Navbar />
      <BreadcrumbComp />
      <ClothesContent />
      <Footer />
    </main>
  );
};

export default ClothesPage;
