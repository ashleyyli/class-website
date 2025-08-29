import type { NextAuthConfig } from 'next-auth';
import supabase from "./app/lib/supabaseClient";
import supabaseAdmin from "./app/lib/supabaseAdmin";
import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";
import { SupabaseAdapter } from "@auth/supabase-adapter"

 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async signIn({ user }) {

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (!profile) {
        const { error: insertError } = await supabase.from("profiles").insert({
          id: user.id,
          email: user.email,
          name: user.name,
          role: "student", // default role
        });

        if (insertError) {
          console.error("Failed to create profile:", insertError);
          return false; // block sign-in on failure
        }
      }

      return true;
    },

    async session({session, user}) {
      if (session.user) {
        session.user.role = user.role;
      }

      return session;
    }
    
  },

  events: {
    async createUser({ user }) {
      await supabaseAdmin.from('profiles').insert({
        id: user.id,
        email: user.email,
        name: user.name,
        role: 'student',
      });
    },
  },
  providers: [
    MicrosoftEntraID({
      clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
      clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
      issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.SUPABASE_URL!,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
  }),
} satisfies NextAuthConfig;