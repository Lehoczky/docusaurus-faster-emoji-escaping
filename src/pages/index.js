import Layout from "@theme/Layout";

export default function Home() {
	return (
		<Layout
			title={`Hello`}
			description="Description will go into a meta tag in <head />"
		>
			<main>
				`"🙂"` won’t be formatted into `"\uD83D\uDE42"` and vice versa.
			</main>
		</Layout>
	);
}
