//create a component

import Dashboard from "./components/imagesFinder/dashboard";
import Animal from "./components/animals/animal";
import LibraryApp from "./components/booksLibrary/libraryApp";
import Route from "./route";
import Profile from "./components/profiles/profiles";
import SideBar from "./components/sidebar/SideBar";

export default function App() {
	return (
		<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
			<SideBar />
			<div className="col-span-5">
				<Route path="/">
					<LibraryApp />
				</Route>
				<Route path="/library">
					<LibraryApp />
				</Route>
				<Route path="/imageFinder">
					<Dashboard />
				</Route>
				<Route path="/animals">
					<Animal />
				</Route>
				<Route path="/profiles">
					<Profile />
				</Route>
			</div>
		</div>
	);
}
