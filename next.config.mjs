/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'healthpaths.ai',
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org',
			},
		],
	},
	async rewrites() {
		return [
			{
				source: '/im',
				destination: '/docglasses-teaser.pdf',
			},
		];
	},
};

export default nextConfig;
