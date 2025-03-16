import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Only protect the admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Check for basic auth credentials
    const basicAuth = request.headers.get("authorization");

    // The expected format is "Basic base64(username:password)"
    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      const [user, pwd] = atob(authValue).split(":");

      // Use environment variables in production
      // For demo purposes, we're using hardcoded credentials
      if (user === "admin" && pwd === "lensx123") {
        return NextResponse.next();
      }
    }

    // Return a response requesting authentication
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="Secure Area"',
      },
    });
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
