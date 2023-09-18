import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
});
export { handler as GET, handler as POST };
