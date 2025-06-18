import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: {
    signIn: "/login",
  },
})

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/services/:path*", 
    "/clients/:path*",
    "/inventory/:path*",
    "/settings/:path*"
  ]
}
