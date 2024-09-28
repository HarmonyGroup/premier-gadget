/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'premier-gadgets.s3.us-east-1.amazonaws.com'
            },
            {
                protocol: 'https',
                hostname: 'premier-gadgets.s3.amazonaws.com'
            }
        ]
    } 
};

export default nextConfig;
