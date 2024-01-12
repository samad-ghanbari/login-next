import { NextResponse, NextRequest } from "next/server";
//import { redirect } from "next/navigation";

// middleware.js
export function middleware(request: NextRequest) {
	if (!request.nextUrl.pathname.startsWith("/_next"))
		// any request
		return NextResponse.rewrite(new URL("/login", request.url));

	return NextResponse.next();
}
