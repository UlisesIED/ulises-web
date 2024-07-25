/** @type {import('next').NextConfig} */
//const nextConfig = {};

const nextConfig = {
  output: "export",  // <=== enables static exports
  distDir: "static-dir",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
