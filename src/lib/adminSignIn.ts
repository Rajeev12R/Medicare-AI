import { signIn } from "next-auth/react"

export async function adminSignIn(
  provider: "admin-credentials" | "admin-otp",
  data: any
) {
  // Use the admin NextAuth endpoint
  return await signIn(
    provider,
    {
      ...data,
      redirect: false,
      callbackUrl: "/admin",
    },
    { basePath: "/api/auth/admin" }
  )
}
