/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  // The lab-operations case study was taken down to keep work details private; old links land on the homepage.
  async redirects() {
    return [{ source: "/projects/lab-operations", destination: "/", permanent: false }];
  },
};

export default nextConfig;
