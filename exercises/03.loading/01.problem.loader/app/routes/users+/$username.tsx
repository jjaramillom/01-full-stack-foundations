import { json, type LoaderFunctionArgs } from '@remix-run/node'
import { Link, useLoaderData } from '@remix-run/react'

// 🐨 get the database from the utils directory using
import { db } from '#app/utils/db.server.ts'

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const user = await db.user.findFirst({
		where: { username: { equals: params.username } },
	})
	return json({ user })
}

export default function ProfileRoute() {
	const data = useLoaderData<typeof loader>()

	return (
		<div className="container mb-48 mt-36">
			<h1 className="text-h1">{data?.user?.name ?? data?.user?.username}</h1>
			<Link to="notes" className="underline">
				Notes
			</Link>
		</div>
	)
}
