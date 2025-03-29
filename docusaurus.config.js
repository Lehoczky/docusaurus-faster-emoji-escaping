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
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "My Site",
				items: [{ to: "/docs", label: "docs", position: "left" }],
			},
		}),

	future: {
		experimental_faster: true,
	},
};

export default config;
