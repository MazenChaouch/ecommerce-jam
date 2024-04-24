import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FooterContent } from "@/app/content";
import { Separator } from "@/components/separator";
import { Badge } from "./ui/badge";

export const FooterContents = () => {
  return (
    <div className="h-fit w-full bg-stone-200 p-4 py-12">
      <div className="container space-y-8 p-2">
        <div className="flex flex-wrap items-center justify-between space-x-4 space-y-4 ">
          <div className="flex h-full w-auto flex-col space-y-4">
            <Image src={FooterContent.brand.image} alt="logo" />
            <p className="w-64 text-sm text-stone-500">
              {FooterContent.brand.description}
            </p>
            <div className="flex space-x-2">
              {FooterContent.socials.map((social) => (
                <Button key={social.name} variant={"link"} size={"icon"}>
                  <Image src={social.image} alt={social.name} />
                </Button>
              ))}
            </div>
          </div>
          <div className="sm: grid grid-cols-1"></div>
          {FooterContent.sections.map((section) => (
            <div
              key={section.title}
              className="flex flex-col justify-center space-y-2 "
            >
              <p className="font-Satoshi text-lg font-medium uppercase tracking-wider">
                {section.title}
              </p>
              {section.links.map((link) => (
                <p key={link.name} className="font-Satoshi text-stone-500">
                  {link.name}
                </p>
              ))}
            </div>
          ))}
        </div>
        <Separator />
        <div className="flex items-center justify-between max-md:flex-col max-md:justify-center max-md:space-y-2">
          <p className="text-stone-500">{FooterContent.copyright}</p>
          <div className="flex space-x-2 md:space-x-4">
            {FooterContent.payment.methods.map((payment) => (
              <Badge key={payment.name} variant="secondary">
                <Image src={payment.image} alt={payment.name} />
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
