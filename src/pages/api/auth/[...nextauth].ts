import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import API from "@/utils/helpers/axios";

interface CustomUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    mobile_no: string;
    customer_no: string;
    authorization: {
        access_token: string;
        token_type: string;
        expires_in: number;
    };
}

declare module "next-auth" {
    interface Session {
        user: CustomUser;
    }

    interface User extends CustomUser {}

    interface JWT {
        user: CustomUser;
    }
}

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
                    const result = await API.post("/login", credentials);
                    const resultData = result.data.data;
                    const customerData: CustomUser = resultData.customer_data;
                    customerData.authorization = resultData.authorization;
                    return customerData;
                } catch (error) {
                    throw new Error(JSON.stringify((error as Error)?.message));
                }
            },
        }),
        CredentialsProvider({
            name: "OTP Login",
            id: "otp-login",
            credentials: {
                phone: {
                    label: "Mobile No",
                    type: "text",
                },
                otp: { label: "OTP", type: "text" },
            },
            async authorize(credentials) {
                try {
                    const result = await API.post("/login", credentials);
                    const resultData = result.data.data;
                    const customerData = resultData.customer_data;
                    customerData.authorization = resultData.authorization;
                    return customerData;
                } catch (error) {
                    throw new Error(JSON.stringify((error as Error)?.message));
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_LOGIN_ID || "",
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_LOGIN_SECRET || "",
        }),
    ],

    session: {
        strategy: "jwt",
    },
    callbacks: {
        async signIn(user) {
            if (user) return !!user;
            return false;
        },
        async jwt({ token, user }) {
            if (user) {
                token.user = user as CustomUser;
            }
            return token;
        },
        async session({ session, token }) {
            if (token.user) {
                const customUser = token.user as CustomUser;
                session.user = customUser;
            }
            return session;
        },
    },
};

export default NextAuth(authOptions);
