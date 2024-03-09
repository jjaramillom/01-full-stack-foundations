import { json, type DataFunctionArgs } from '@remix-run/node'
import { Form, useLoaderData } from '@remix-run/react'
import { floatingToolbarClassName } from '#app/components/floating-toolbar.tsx'
import { Button } from '#app/components/ui/button.tsx'
import { Input } from '#app/components/ui/input.tsx'
import { Label } from '#app/components/ui/label.tsx'
import { Textarea } from '#app/components/ui/textarea.tsx'
import { db } from '#app/utils/db.server.ts'
import { invariantResponse } from '#app/utils/misc.tsx'

export async function loader({ params }: DataFunctionArgs) {
	const note = db.note.findFirst({
		where: {
			id: {
				equals: params.noteId,
			},
		},
	})

	invariantResponse(note, 'Note not found', { status: 404 })

	return json({
		note: { title: note.title, content: note.content },
	})
}

export default function NoteEdit() {
	const data = useLoaderData<typeof loader>()

	// 🐨 render a Remix Form with the method of "post"
	// 🐨 render an <label> with the text "Title" and an <input> with the name "title" and defaultValue of data.note.title
	// 🐨 render an <label> with the text "Content" and an <textarea> with the name "content" and defaultValue of data.note.content
	// 🐨 render a button with the text "Submit"

	return (
		<Form method="POST" className="flex flex-col px-4 py-8 gap-5">
			<Label>
				Title
				<Input type="text" defaultValue={data.note.title} name="title" className='mt-5' />
			</Label>
			<Label>
				Content
				<Textarea defaultValue={data.note.content} name="content" className='mt-5' />
			</Label>

			<div className={floatingToolbarClassName}>
				<Button variant="destructive" type='reset'>Reset</Button>
				<Button type='submit'>Submit</Button>
			</div>
		</Form>
	)
}
