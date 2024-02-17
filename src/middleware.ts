import { NextRequest, NextResponse } from "next/server";
import { analytics } from "./utils/analytics";

export default async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === "/") {
    // analyticsi yoxla
    try {
      analytics.track("pageview", {
        page: "/",
        country: req.geo?.country,
      });
    } catch (err) {
      // gozle
      console.log(err);
    }
  }

  return NextResponse.next();
}

export const matcher = {
  matcher: ["/"],
};
