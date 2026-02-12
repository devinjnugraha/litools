import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	basePath: '/litools',
	distDir: 'out/litools',
	images: { unoptimized: true },
};

export default nextConfig;
