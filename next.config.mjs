/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // Supaya gambar tetap muncul di mode export
    },
  };
  
  module.exports = nextConfig;
  