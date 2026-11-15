/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/#projects',
        permanent: true,
      },
      {
        source: '/experience',
        destination: '/#experience',
        permanent: true,
      },
      {
        source: '/skills',
        destination: '/#skills',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
