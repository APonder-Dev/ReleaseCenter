/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Linting runs separately via `pnpm lint` (ESLint 9 flat config, shared
    // across the monorepo). Next's built-in lint step during `next build`
    // still targets the legacy ESLint 8 CLI API and errors under ESLint 9.
    ignoreDuringBuilds: true,
  },
  transpilePackages: [
    '@releasecenter/shared-types',
    '@releasecenter/ui',
    '@releasecenter/validation',
  ],
};

export default nextConfig;
