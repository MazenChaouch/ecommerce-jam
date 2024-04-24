import Image from "next/image";
import preference from "@/assets/preference.svg";
import { Separator } from "@/components/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const Filter = () => {
  return (
    <div className="flex h-fit w-72 flex-col space-y-6 rounded-lg border border-stone-200 p-6">
      <div className="flex items-center justify-between">
        <p className="font-Satoshi text-xl font-bold">Filters</p>
        <Image src={preference} alt="preference"></Image>
      </div>
      <Separator />
      <div className="flex flex-col space-y-2">
        <FilterItem label="Tops" />
        <FilterItem label="Bottoms" />
        <FilterItem label="Shoes" />
        <FilterItem label="Accessories" />
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="price">
          <AccordionTrigger className="text-base">Price</AccordionTrigger>
          <AccordionContent>
            <Slider defaultValue={[25, 75]} minStepsBetweenThumbs={10} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
const FilterItem = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center justify-between">
      <label
        htmlFor={label}
        className="select-none font-medium leading-none text-stone-900/80 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
      <Checkbox className="size-5 rounded-md " id={label} />
    </div>
  );
};
