import "./Dashboard.css";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
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
