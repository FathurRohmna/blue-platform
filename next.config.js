// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you're using custom MDX components
    providerImportSource: '@mdx-js/react',
  },
});
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'ts', 'tsx', 'mdx'],
  webpack(config, { dev }) {
    // Hapus cache babel di production
    if (!dev) {
      config.module.rules.forEach((rule) => {
        if (rule.use?.loader === 'next-babel-loader' && rule.use?.options) {
          rule.use.options.cache = false;
        }
      });
    }

    // SVG as React component
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(withMDX(nextConfig));
