/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "ucarecdn.com",
            },
            {
                protocol: "https",
                hostname: "*.ucarecdn.com",
            },
            {
                protocol: "https",
                hostname: "*.ucarecd.net",
            },
            {
                protocol: "https",
                hostname: "cdn.statically.io",
                pathname: "/**",
            },
            {
                protocol: 'https',
                hostname: 'storage.novatechpvc.com.tr',
                port: '',
                pathname: '/storage/v1/object/public/**',
            },
            {
                protocol: 'https',
                hostname: '*.public.blob.vercel-storage.com',
            },
        ],
        loader: "default",
    },
};

export default nextConfig;
