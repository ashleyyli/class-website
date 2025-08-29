import NextAuth from 'next-auth';
import { authConfig } from './auth.config'
// import { SupabaseAdapter } from "@auth/supabase-adapter"
// import MicrosoftEntraID from "next-auth/providers/microsoft-entra-id";

export const { handlers, auth, signIn, signOut } = NextAuth({
    ...authConfig,
});

// export const { handlers, auth, signIn, signOut } = NextAuth({
//   providers: [
//     MicrosoftEntraID({
//       clientId: process.env.AUTH_MICROSOFT_ENTRA_ID_ID,
//       clientSecret: process.env.AUTH_MICROSOFT_ENTRA_ID_SECRET,
//       issuer: process.env.AUTH_MICROSOFT_ENTRA_ID_ISSUER,
//     }),
//   ],
//   adapter: SupabaseAdapter({
//     url: process.env.SUPABASE_URL!,
//     secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
//   }),
// })