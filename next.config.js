const path = require("path");

const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	serverRuntimeConfig: {},
	sassOptions: {
		includePaths: [path.join(__dirname, "src", "styles")],
	},
};

module.exports = nextConfig;
