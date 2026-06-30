/** @type {import('next').Config} */
const nextConfig = {
  // Menginstruksikan Next.js untuk membangun file standalone
  // Ini krusial untuk meminimalkan ukuran Docker Image di environment produksi
  output: "standalone",
  
  // Mengamankan header HTTP secara otomatis
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
