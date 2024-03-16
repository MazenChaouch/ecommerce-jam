import msi from "@/assets/msi.png";
import pc from "@/assets/pc.png";
import tshirt from "@/assets/t-shirt.png";
import selicons from "@/assets/selicons.png";
import shirt from "@/assets/shirt.png";
import apple from "@/assets/brands/apple.svg";
import samsung from "@/assets/brands/samsung.svg";
import porsche from "@/assets/brands/porsche.svg";
import gucci from "@/assets/brands/gucci.svg";
import calvinKlein from "@/assets/brands/calvin-klein.svg";
import phones from "@/assets/phones.png";
import r9 from "@/assets/r9.png";
import short from "@/assets/short.png";
import mixer from "@/assets/mixer.png";
import clothes from "@/assets/clothes.png";
import cars from "@/assets/cars.png";
import gaming from "@/assets/gaming.png";
import decor from "@/assets/decor.png";
const Hero = {
  title: "NEW Collection 2025 of msi !",
  description:
    "MSI's 2025 gaming laptop collection revolutionizes portable gaming with cutting-edge technology and sleek design. Featuring next-gen processors and graphics cards,",
  image: msi,
  specs: [
    {
      name: "680HZ",
      description: "High Refresh Rate",
    },
    {
      name: "6080 NTX",
      description: "High Quality Graphics",
    },
    {
      name: "I9 20TH",
      description: "Speed and quick!",
    },
  ],
  link: "#",
};

const Brands: { name: string; image: any }[] = [
  {
    name: "samsung",
    image: samsung,
  },
  {
    name: "apple",
    image: apple,
  },
  {
    name: "porsche",
    image: porsche,
  },
  {
    name: "gucci",
    image: gucci,
  },
  {
    name: "calvin-klein",
    image: calvinKlein,
  },
];

const NewProducts: { name: string; price: number; image: any }[] = [
  {
    name: "Selicon IPHONE SE",
    price: 20,
    image: selicons,
  },
  {
    name: "Shirt Outfitters",
    price: 130,
    image: tshirt,
  },
  {
    name: "CHECKERED SHIRT",
    price: 180,
    image: shirt,
  },
  {
    name: "MSI 2025 NTX-4080",
    price: 8499,
    image: pc,
  },
];
const TopProducts: { name: string; price: number; image: any }[] = [
  {
    name: "IPHONE 15 PRO MAX",
    price: 3999,
    image: phones,
  },
  {
    name: "R9 2025",
    price: 4999,
    image: r9,
  },
  {
    name: "Short Outfitters",
    price: 199,
    image: short,
  },
  {
    name: "Mixer 2025",
    price: 499,
    image: mixer,
  },
];
const Shop: { title: string; href: string; description: string }[] = [
  {
    title: "Clothes",
    href: "/clothes",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Cars",
    href: "/cars",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Gaming Space",
    href: "/gaming-space",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Decor",
    href: "/decor",
    description: "Visually or semantically separates content.",
  },
];
const Navlinks: { name: string; link: string }[] = [
  {
    name: "New Arrivals",
    link: "/new-arrivals",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "About us",
    link: "/about",
  },
];
const Categories: { name: string; link: string; image: any }[] = [
  {
    name: "Clothes",
    link: "/clothes",
    image: clothes,
  },
  {
    name: "Cars",
    link: "/cars",
    image: cars,
  },
  {
    name: "Gaming Space",
    link: "/gaming-space",
    image: gaming,
  },
  {
    name: "Decor",
    link: "/decor",
    image: decor,
  },
];
export { Hero, Brands, NewProducts, TopProducts, Shop, Navlinks, Categories };
