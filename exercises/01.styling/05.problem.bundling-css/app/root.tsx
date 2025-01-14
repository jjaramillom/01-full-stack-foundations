import { cssBundleHref } from '@remix-run/css-bundle'
import { type LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Scripts } from '@remix-run/react'
import faviconAssetUrl from './assets/favicon.svg'
import { KCDShop } from './kcdshop.tsx'
// 🐨 Import the cssBundleHref here
import './styles/font.css'
// 🧝‍♂️ I imported the CSS file for you. When you have it working, it'll be obvious
// ... I promise... 😈
import './styles/global.css'
import './styles/tailwind.css'

export const links: LinksFunction = () => {
	return [
		{ rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl },
		{ rel: 'stylesheet', href: cssBundleHref! },
		// 🐨 Add the cssBundleHref to the links array
		// 🦺 feel free to handle the undefined case however you like or ignore
		// the TypeScript error if you want. I'll show you how I handle it later.
	]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Links />
			</head>
			<body>
				<p className="p-8 text-xl">Hello World</p>
				<Scripts />
				<KCDShop />
				<LiveReload />
			</body>
		</html>
	)
}
