import { type LinksFunction } from '@remix-run/node'
import { Links, LiveReload, Scripts } from '@remix-run/react'
import faviconAssetUrl from './assets/favicon.svg'
import { KCDShop } from './kcdshop.tsx'
import fontStylesheetUrl from './styles/font.css'
// 🐨 get the fontStylesheetUrl from the ./styles/font.css file

export const links: LinksFunction = () => {
	return [
		{ rel: 'icon', type: 'image/svg+xml', href: faviconAssetUrl },
		{ rel: 'stylesheet', href: fontStylesheetUrl },
		// 🐨 add a link for the fonts file here
	]
}

export default function App() {
	return (
		<html lang="en">
			<head>
				<Links />
			</head>
			<body>
				<p>Hello World</p>
				<Scripts />
				<KCDShop />
				<LiveReload />
			</body>
		</html>
	)
}
