/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    basePath: "/connect",
    assetPrefix: "/connect/",
    typescript: {
        ignoreBuildErrors: true,
    },
    async redirects() {
        return [
            {
                source: "/connect/",
                destination: "/",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
