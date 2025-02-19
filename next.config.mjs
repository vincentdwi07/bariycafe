/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
      unoptimized: true, // agar gambar tetap bisa tampil di GitHub Pages
    },
  };

export default nextConfig;
