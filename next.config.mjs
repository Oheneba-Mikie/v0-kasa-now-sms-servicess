/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Disable standalone output to avoid Windows symlink issues and reduce upload size
  // Netlify plugin handles Next.js deployment without standalone mode
  output: undefined,
}

export default nextConfig
