import localFont from "next/font/local";

const Satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});
const Integral = localFont({
  src: [
    {
      path: "../fonts/Integral-CF/IntegralCF-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Integral-CF/IntegralCF-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Integral-CF/IntegralCF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-integral",
});
export { Satoshi, Integral };
