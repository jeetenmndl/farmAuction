/** @type {import('next').NextConfig} */

const nextConfig = {
  
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'plus.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'utfs.io',
        },
        {
            protocol: 'https',
            hostname: 'encrypted-tbn0.gstatic.com',
          },
      ],
    },};
  

export default nextConfig;
