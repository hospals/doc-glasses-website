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
	async redirects() {
		return [
			{
				source: '/terms-of-service',
				destination: '/terms',
				permanent: true,
			},
			{
				source: '/privacy',
				destination: '/privacy-policy',
				permanent: true,
			},
		];
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
