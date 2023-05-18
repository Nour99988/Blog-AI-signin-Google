import NextAuth from "next-auth";
import GooglrProvider from "next-auth/providers/google";
import { connectionToDB } from "@utlis/database";
import User from "@models/user";

// console.log({ test: process.env.GOOGLE_ID, test2: process.env.GOOGLE_CLIENT_SECRET });
const handler = NextAuth({
  providers: [
    GooglrProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },

    async signIn({ profile }) {
      try {
        await connectionToDB();
        const userExists = await User.findOne({ email: profile.email });
        if (!userExists) {
          console.log(profile);
          await User.create({
            email: profile.email,
            username: profile.name.replace(" ", "").toLowerCase(),
            image: profile.picture,
          });
        }
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
