import { useState } from "react";

export default function SearchBar({ onSearch }) {
	const [text, setText] = useState("");
	function handleOnChange(event) {
		setText(event.target.value);
	}

	function handleFormSumbit(event) {
		event.preventDefault();
		onSearch(text);
	}
	return (
		<div className="search-bar">
			<h3>Search Image</h3>
			<form onSubmit={handleFormSumbit}>
				<input type="text" value={text} onChange={handleOnChange} />
			</form>
		</div>
	);
}
