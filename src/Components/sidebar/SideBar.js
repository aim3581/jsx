import Link from "../link/link";

export default function SideBar() {
	const links = [
		{ label: "Go To Library", path: "/" },
		{ label: "Go To Image finder", path: "/imageFinder" },
		{ label: "Go To Add Animal", path: "/animals" },
		{ label: "Go To AI Profiles", path: "/profiles" },
	];

	const rederLinks = links.map(({ label, path }) => {
		return (
			<Link
				key={label}
				to={path}
				className="mb-3"
				activeClassName="font-bold border-l-4 border-blue-500 pl-2"
			>
				{label}
			</Link>
		);
	});
	return (
		<div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
			{rederLinks}
		</div>
	);
}
