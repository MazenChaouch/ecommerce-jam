import { NextRequest, NextResponse } from "next/server";

const middleware = async (req: NextRequest) => {
  if (req.nextUrl.pathname === "/") {
    return NextResponse.redirect("http://localhost:3000/home");
  }
  return NextResponse.next();
};

export default middleware;
