import { type LoaderFunctionArgs, json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
// 🐨 get the db utility using:
import { db } from '#app/utils/db.server.ts'

export const loader = async ({ params }: LoaderFunctionArgs) => {
	const note = await db.note.findFirst({
		where: {
			id: { equals: params.noteId },
		},
	})
	return json({ note })
}

export default function NoteRoute() {
	const data = useLoaderData<typeof loader>()
	return (
		<div className="absolute inset-0 flex flex-col px-10">
			<h2 className="mb-2 pt-12 text-h2 lg:mb-6">{data?.note?.title}</h2>
			<div className="overflow-y-auto pb-24">
				<p className="whitespace-break-spaces text-sm md:text-lg">
					{data.note?.content}
				</p>
			</div>
		</div>
	)
}
