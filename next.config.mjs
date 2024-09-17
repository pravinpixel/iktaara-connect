/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    GOOGLE_LOGIN_ID: process.env.NEXT_PUBLIC_GOOGLE_LOGIN_ID,
    GOOGLE_LOGIN_SECRET: process.env.NEXT_PUBLIC_GOOGLE_LOGIN_SECRET,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
};

export default nextConfig;
