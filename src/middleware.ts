export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/health-monitoring/:path*",
    "/doctor/:path*",
  ],
} 