import { useParams } from '@remix-run/react'

export default function SomeNoteId() {
	const { noteId } = useParams()
	return (
		<div className="container pt-12 border-8 border-red-500">
			{/* 🐨 render the note id from useParams */}
			<h2 className="text-h2">{noteId}</h2>
		</div>
	)
}
