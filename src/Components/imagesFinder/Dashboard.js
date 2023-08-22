import "./dashboard.css";
import SearchBar from "./searchBar";
import ImageList from "./imageList";
import { useState } from "react";

export default function Dashboard() {
	const [text, setText] = useState("");
	function handleOnSearch(value) {
		setText(value);
	}
	return (
		<div className="app">
			<SearchBar onSearch={handleOnSearch} />
			<ImageList query={text} />
		</div>
	);
}
