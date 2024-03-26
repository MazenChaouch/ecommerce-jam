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
import mail from "@/assets/mail.svg";
import facebook from "@/assets/socials/facebook.svg";
import twitter from "@/assets/socials/twitter.svg";
import instagram from "@/assets/socials/instagram.svg";
import github from "@/assets/socials/github.svg";
import logo from "@/assets/jam_black.svg";
import visa from "@/assets/payment/visa.svg";
import mastercard from "@/assets/payment/mastercard.svg";
import paypal from "@/assets/payment/paypal.svg";
import googlepay from "@/assets/payment/google-pay.svg";
import applepay from "@/assets/payment/apple-pay.svg";

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
const TopProducts: {
  name: string;
  oldPrice?: number;
  price: number;
  rating?: number;
  discount?: number;
  image: any;
}[] = [
  {
    name: "IPHONE 15 PRO MAX",
    oldPrice: 5000,
    price: 3999,
    rating: 4.5,
    discount: 20,
    image: phones,
  },
  {
    name: "R9 2025",
    oldPrice: 5999,
    price: 4999,
    rating: 4.5,
    image: r9,
  },
  {
    name: "Short Outfitters",
    oldPrice: 299,
    price: 199,
    rating: 4,
    image: short,
  },
  {
    name: "Mixer 2025",
    oldPrice: 599,
    price: 499,
    rating: 4.5,
    image: mixer,
  },
];
const Shop: { title: string; href: string; description: string }[] = [
  {
    title: "Clothes",
    href: "/clothes",
    description: "Best quality clothes, for all ages.",
  },
  {
    title: "Cars",
    href: "/cars",
    description: "spare part and new cars, all in one place.",
  },
  {
    title: "Gaming Space",
    href: "/gaming-space",
    description: "high tech gaming equipment, for all gamers.",
  },
  {
    title: "Decor",
    href: "/decor",
    description: "modern and classic decor, for all tastes.",
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
const Testimonial: { rating: number; name: string; comment: string }[] = [
  {
    rating: 2,
    name: "John D.",
    comment:
      "I've been a loyal customer of Shop.co for years, and I can't recommend them enough. The quality of their products, combined with their exceptional customer service, makes them stand out from the competition.",
  },
  {
    rating: 4,
    name: "Sahar M.",
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    rating: 3.5,
    name: "Alex K.",
    comment:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    rating: 5,
    name: "James L.",
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
  {
    rating: 5,
    name: "Sara B.",
    comment:
      "I've been shopping at Shop.co for years, and I've never been disappointed. The quality of their products is unmatched, and their customer service is top-notch. I highly recommend them to anyone looking for stylish and affordable clothing.",
  },
  {
    rating: 5,
    name: "Mike S.",
    comment:
      "Shop.co has become my go-to destination for all things fashion. Their selection of clothes is extensive, and the quality is exceptional. I love that I can find everything I need in one place, from casual wear to formal attire.",
  },
  {
    rating: 5,
    name: "Emily P.",
    comment:
      "I've always been a fan of Shop.co, and their latest collection has only solidified my loyalty. The clothes are trendy, comfortable, and affordable, making them a must-have for any fashion enthusiast.",
  },
  {
    rating: 5,
    name: "David H.",
    comment:
      "Shop.co has quickly become my favorite online store for clothes. Their selection is vast, their prices are competitive, and their customer service is exceptional. I highly recommend them to anyone looking for quality fashion at affordable prices.",
  },
  {
    rating: 5,
    name: "Linda M.",
    comment:
      "I can't say enough good things about Shop.co. Their clothes are stylish, comfortable, and affordable, and their customer service is second to none. I've recommended them to all my friends and family, and they've all become loyal customers too.",
  },
  {
    rating: 5,
    name: "Tom R.",
    comment:
      "Shop.co is my go-to destination for all things fashion. Their selection of clothes is unmatched, their prices are competitive, and their customer service is exceptional. I've never been disappointed with a purchase from them, and I highly recommend them to anyone looking for quality clothes at affordable prices.",
  },
];
const FooterContent = {
  brand: {
    name: "Jam Store",
    description:
      "\"Jam Store: Where Everything's Modern,\n and Anything's Yours\"",
    image: logo,
    mail: mail,
  },
  socials: [
    {
      name: "twitter",
      image: twitter,
    },
    {
      name: "facebook",
      image: facebook,
    },
    {
      name: "instagram",
      image: instagram,
    },
    {
      name: "github",
      image: github,
    },
  ],
  sections: [
    {
      title: "Company",
      links: [
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Features",
          link: "/features",
        },
        {
          name: "Works",
          link: "/works",
        },
        {
          name: "Career",
          link: "/career",
        },
      ],
    },
    {
      title: "Help",
      links: [
        {
          name: "Customer Support",
          link: "/customer-support",
        },
        {
          name: "Delivery Details",
          link: "/delivery-details",
        },
        {
          name: "Teams & Conditions",
          link: "/terms-conditions",
        },
        {
          name: "Privacy Policy",
          link: "/privacy-policy",
        },
      ],
    },
    {
      title: "Faq",
      links: [
        {
          name: "Account",
          link: "/account",
        },
        {
          name: "Manage Deliveries",
          link: "/manage-deliveries",
        },
        {
          name: "Orders",
          link: "/orders",
        },
        {
          name: "Payment",
          link: "/payment",
        },
      ],
    },
    {
      title: "Resources",
      links: [
        {
          name: "Free eBooks",
          link: "/free-ebooks",
        },
        {
          name: "Development Tutorial",
          link: "/development-tutorial",
        },
        {
          name: "How to - Blog",
          link: "/how-to-blog",
        },
        {
          name: "Youtube Playlist",
          link: "/youtube-playlist",
        },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} Jam Store. All rights reserved.`,
  payment: {
    methods: [
      {
        name: "visa",
        image: visa,
      },
      {
        name: "mastercard",
        image: mastercard,
      },
      {
        name: "paypal",
        image: paypal,
      },
      {
        name: "googlepay",
        image: googlepay,
      },
      {
        name: "applepay",
        image: applepay,
      },
    ],
  },
};
export {
  Hero,
  Brands,
  NewProducts,
  TopProducts,
  Shop,
  Navlinks,
  Categories,
  Testimonial,
  FooterContent,
};
