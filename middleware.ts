import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Only protect the admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Check for basic auth credentials
    const basicAuth = request.headers.get("authorization");

    // Get credentials from environment variables or use defaults for development
    const adminUser = process.env.ADMIN_USERNAME || "admin";
    const adminPass = process.env.ADMIN_PASSWORD || "lensx123";

    // The expected format is "Basic base64(username:password)"
    if (basicAuth) {
      const authValue = basicAuth.split(" ")[1];
      try {
        const [user, pwd] = atob(authValue).split(":");

        // Compare with environment variables
        if (user === adminUser && pwd === adminPass) {
          return NextResponse.next();
        }
      } catch (error) {
        console.error("Auth parsing error:", error);
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
