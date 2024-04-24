import { NewsLetter } from "@/components/newsLetter";
import { FooterContents } from "@/components/footerContent";

export const Footer = () => {
  return (
    <div className="h-fit w-full">
      <NewsLetter />
      <FooterContents />
    </div>
  );
};
