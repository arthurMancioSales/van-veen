/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.freepik.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "vanveen.com.br",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "instagram.fcpq14-1.fna.fbcdn.net",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "scontent.cdninstagram.com",
                port: "",
                pathname: "/**",
            },
        ],
    },
};

module.exports = nextConfig;
