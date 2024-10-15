/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: process.env.NEXT_PUBLIC_IKTARAA_URL,
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
