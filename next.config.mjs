/** @type {import('next').NextConfig} */

const nextConfig = {
   env: {
      NEXT_PUBLIC_DEV_SERVER_URL: process.env.NEXT_PUBLIC_DEV_SERVER_URL,
      NEXT_PUBLIC_PROD_SERVER_URL: process.env.NEXT_PUBLIC_PROD_SERVER_URL,
   },
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '/**',
         },
      ],
   },
};

export default nextConfig;
