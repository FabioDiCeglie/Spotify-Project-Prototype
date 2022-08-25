import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
export default NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.GITHUB_ID ? process.env.GITHUB_ID : "",
      clientSecret: process.env.GITHUB_SECRET ? process.env.GITHUB_SECRET : "",
      authorization: "",
    }),
  ],
});
