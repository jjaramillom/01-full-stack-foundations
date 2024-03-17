import { type MetaFunction } from '@remix-run/react'

import { type loader } from './notes.tsx'

export default function NotesIndexRoute() {
	return (
		<div className="container pt-12">
			<p className="text-body-md">Select a note</p>
		</div>
	)
}

export const meta: MetaFunction<
	null,
	{ 'routes/users+/$username_+/notes': typeof loader }
> = ({ params, matches }) => {
	const match = matches.find(m => m.id === 'routes/users+/$username_+/notes')

	const displayName = match?.data.owner.username ?? params.username
	const noteCount = match?.data.notes.length ?? 0
	const notesText = noteCount === 1 ? 'note' : 'notes'
	return [
		{ title: `${displayName}'s Notes | Epic Notes` },
		{
			name: 'description',
			content: `Checkout ${displayName}'s ${noteCount} ${notesText} on Epic Notes`,
		},
	]
}
