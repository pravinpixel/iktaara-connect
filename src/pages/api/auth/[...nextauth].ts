import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";
import AUTHAPI from "@/utils/helpers/authAxios";

interface CustomUser {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    mobile_no: string;
    customer_no: string;
    token: string;
    data: CustomUser;
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

    interface User extends CustomUser { }

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
                    const result = await AUTHAPI.post("/login", credentials)
                    const loggedUser = result?.data?.customer_data || {};
                    const modifiedData = {
                        id: loggedUser.id,
                        name: loggedUser?.first_name || '',
                        email: loggedUser?.email || '',
                        data: loggedUser,
                        authorization: result?.data?.authorization || null,
                        token: result?.data?.authorization?.access_token,
                    }

                    return modifiedData as never
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
                    const result = await AUTHAPI.post("/login/otp", credentials)
                    const loggedUser = result?.data?.customer_data || {};
                    const modifiedData = {
                        id: loggedUser.id,
                        name: loggedUser?.first_name || '',
                        email: loggedUser?.email || '',
                        data: loggedUser,
                        authorization: result?.data?.authorization || null,
                        token: result?.data?.authorization.access_token,
                    }
                    return modifiedData as never;
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
            if (user) return true;
            return false;
        },
        async jwt({ token, user, account, profile }) {
            if (account?.provider === 'google') {
                const postData = {
                    provider: account.provider,
                    type: account.provider,
                    sub: account.providerAccountId,
                    name: profile?.name,
                    email: profile?.email,
                    picture: profile?.image,
                }
                try {
                    const result = await AUTHAPI.post('/google/callback', postData)
                    const loggedUser = result?.data?.customer_data || {};
                    const modifiedData = {
                        id: loggedUser.id,
                        name: loggedUser?.first_name || '',
                        email: loggedUser?.email || '',
                        data: loggedUser,
                        authorization: result?.data?.authorization || null,
                        token: result?.data?.authorization.access_token,
                    }
                    return modifiedData as never;

                } catch (error) {
                    throw new Error(JSON.stringify((error as Error)?.message));
                }
            }
            if (user) {
                token.user_id = user?.id || null;
                token.token = user?.token || null
                return token
            }
            return token;
        },
        async session({ session, token }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    user_id: token.user_id,
                    token: token.token,
                },
            }
        },
    },
};

export default NextAuth(authOptions);
