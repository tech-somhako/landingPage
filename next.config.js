/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

const nextConfig = {
	i18n,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true
	},
	reactStrictMode: true,
	images: {
		domains: ["localhost", "127.0.0.1", "atsapi.somhako.com", "images.pexels.com", "cdn-images-1.medium.com"]
	}
	// env: {
	// 	OPENAI_API: process.env.OPENAI_API
	// }
};

module.exports = nextConfig;
