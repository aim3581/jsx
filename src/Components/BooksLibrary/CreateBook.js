import { useState } from "react";
export default function ({ onSubmit }) {
	const [title, setTitle] = useState("");
	function handleOnChange(event) {
		setTitle(event.target.value);
	}

	function handleFormSumbit(event) {
		event.preventDefault();
		onSubmit(title);
		setTitle("");
	}
	return (
		<div className="book-create">
			<form onSubmit={handleFormSumbit}>
				<label>Title</label>
				<input
					type="text"
					className="input"
					value={title}
					onChange={handleOnChange}
				/>
				<button className="button">Create!</button>
			</form>
		</div>
	);
}
