/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: "/connect",
    assetPrefix : "/connect/",
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
