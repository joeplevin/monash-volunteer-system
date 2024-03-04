import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/models/user";

export const options = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "your password",
        },
      },
      authorize: async (credentials) => {
        try {
          const foundUser = await User.findOne({
            username: credentials.username,
          })
            .lean()
            .exec();
          if (foundUser) {
            console.log("User found");
            const match = await bcrypt.compare(
              credentials.password,
              foundUser.password
            );
            if (match) {
              console.log("Password match");
              return Promise.resolve(foundUser);
            }
          }
        } catch (error) {
          console.error(error);
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.username = user.username;
      }
    },
    async session({ session, token }) {
      if (session?.user) session.user = token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
