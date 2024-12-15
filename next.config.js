/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "van-veen.s3.sa-east-1.amazonaws.com",
                port: "",
                pathname: "/van-veen-website/**",
            },
            {
                protocol: "https",
                hostname: "*.cdninstagram.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
