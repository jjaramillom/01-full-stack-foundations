import { Link, useParams } from '@remix-run/react'

export default function UserProfileRoute() {
	const { contactId } = useParams()
	return (
		<div className="container mb-48 mt-36 border-4 border-green-500">
			<h1 className="text-h1">{contactId}</h1>
			{/* <h1 className="text-h1">{params.contactId}</h1> */}
			<Link to="notes">notes</Link>
			{/* 🐨 add a Link to "notes" here */}
		</div>
	)
}
