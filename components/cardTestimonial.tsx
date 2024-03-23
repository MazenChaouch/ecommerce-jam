import { Rating } from "./rating";
import verified from "../assets/verified.svg";
import Image from "next/image";
interface CardTestimonialProps {
  name: string;
  rating: number;
  comment: string;
}
export const CardTestimonial = ({
  name,
  rating,
  comment,
}: CardTestimonialProps) => {
  return (
    <div className="h-64 w-64 space-y-2 rounded-xl border border-stone-200 bg-white p-6 md:w-96">
      <Rating rating={rating} />
      <div className="flex space-x-2">
        <p className="font-Satoshi font-bold text-stone-900">{name}</p>
        <Image src={verified} alt="avatar" className="h-6 w-6" />
      </div>
      <p className="h-36 overflow-hidden font-Satoshi text-stone-500">
        {comment}
      </p>
    </div>
  );
};
