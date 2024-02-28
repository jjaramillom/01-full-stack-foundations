import { Link, Outlet, NavLink, useParams } from '@remix-run/react'

export default function NotesRoute() {
	const { contactId } = useParams()
	const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
		isActive ? 'bg-accent' : ''
	return (
		<div className="flex h-full justify-between pb-12 border-8 border-blue-500">
			<div className="flex flex-col">
				<Link to=".." relative="path">
					back to {contactId}
				</Link>
				<h1 className="text-h1">Notes</h1>
				<NavLink to="some-note-id" className={navLinkClasses}>
					some-note
				</NavLink>
				<NavLink
					to="some-note-id2"
					className={navLinkClasses}
				>
					some-note 2
				</NavLink>
				{/* 🐨 add two links here.
				One to go back to the parent *path* (💰 not parent "route" that's why you need to use the relative="path" prop)
				and the other to go to the some-note-id route
			*/}
				{/* 💰 feel free to restructure things however you like to make them look nice */}
			</div>
			<Outlet />
		</div>
	)
}
