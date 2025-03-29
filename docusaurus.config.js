// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "My Site",
	url: "https://your-docusaurus-site.example.com",
	baseUrl: "/",
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				theme: {
					customCss: "./src/css/custom.css",
				},
				docs: false,
			}),
		],
	],
	// future: { experimental_faster: true },
};

export default config;
