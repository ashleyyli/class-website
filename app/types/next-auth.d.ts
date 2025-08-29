/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    role: "student" | "admin"
  }

  interface Session {
    user: {
      id: string
      name: string | null
      email: string | null
      image?: string | null
      role: "student" | "admin"
    }
  }
}