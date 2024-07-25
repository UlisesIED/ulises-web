/** @type {import('next').NextConfig} */
//const nextConfig = {};

const nextConfig = {
  output: "export",  // <=== enables static exports
  images: {
    unoptimized: true
  }
};

export default nextConfig;
