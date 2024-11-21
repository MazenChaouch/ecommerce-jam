import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect("https://ecommerce-jam.vercel.app/home");
  }
  return NextResponse.next();
};

export default middleware;
