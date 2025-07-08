import withMDX from '@next/mdx';
import withBundleAnalyzer from '@next/bundle-analyzer';

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    // If you're using custom MDX components
    providerImportSource: '@mdx-js/react',
  },
});

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'ts', 'tsx', 'mdx'],
};

export default bundleAnalyzer(mdxConfig(nextConfig));
