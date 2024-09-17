import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import axios from "axios";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Email Login",
      id: "sign-in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const result = await axios.post(
            "https://staging-admin.iktaraa.com/api/login",
            credentials
          );
          const resultData = result.data.data;
          const customerData = resultData.customer_data;
          customerData.authorization = resultData.authorization;
          console.log(customerData, "customerData");
          return customerData;
        } catch (error) {
          console.error(error, "kkkk");
          throw new Error(JSON.stringify(error));
        }
      },
    }),
    // CredentialsProvider({
    //   name: "OTP Login",
    //   id: "otp-login",
    //   credentials: {
    //     phone: {
    //       label: "Mobile No",
    //       type: "text",
    //     },
    //     otp: { label: "OTP", type: "text" },
    //   },
    //   async authorize(credentials) {
    //     try {
    //       const result = await api.login(credentials);
    //       return result.data.customer_data;
    //     } catch (error) {
    //       console.error(error);
    //       return null;
    //     }
    //   },
    // }),
    GoogleProvider({
      clientId: process.env.GOOGLE_LOGIN_ID || "",
      clientSecret: process.env.GOOGLE_LOGIN_SECRET || "",
    }),
  ],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn(user: any) {
      if (user) return user;

      return false;
    },
    async jwt({ token, user }) {
      console.log(user, "user");

      if (user) {
        console.log(user, "user_token");
        console.log(token, "token");
        return {
          ...token,
          auth: user,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;
      console.log(session, "session");
      return session;
    },
  },
};
export default NextAuth(authOptions);
