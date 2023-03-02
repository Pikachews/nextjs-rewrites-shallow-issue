/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/a",
        destination: "/b",
      }
    ]
  }
}

module.exports = nextConfig
