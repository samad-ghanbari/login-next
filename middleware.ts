import { NextResponse, NextRequest } from "next/server";
//import { requestIP } from "request-ip";
//import { redirect } from "next/navigation";

// middleware.js
export function middleware(request: NextRequest) {
	if (!request.nextUrl.pathname.startsWith("/_next")) {
		// check network access
		if (!networkAccess(request))
			return NextResponse.rewrite(
				new URL("/network_denied", request.url)
			);
		//check token access
		const token: any = getToken(request);
		if (preEvaluateToken(token)) return NextResponse.next();
		else return NextResponse.rewrite(new URL("/login", request.url));
	}

	return NextResponse.next();
}

function getToken(request: NextRequest): any {
	const token: any = request.headers.get("authorization")?.split(" ")[1];
	return token;
}

function preEvaluateToken(token: any): boolean {
	// it couldn't be empty and should have 2 dot in it.
	if (token == "") return false;
	else {
		const REG: RegExp = /(\..*){2}/;
		if (REG.test(token)) return true;
		else return false;
	}
}

function networkAccess(request: NextRequest): boolean {
	//const clientIp: string = requestIP.getClientIp(request);
	//console.log(clientIp);
	return false;
}
