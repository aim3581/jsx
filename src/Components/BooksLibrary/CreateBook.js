import { useState } from "react";
import useBookContext from "../../hooks/use-book";

export default function () {
	const [title, setTitle] = useState("");
	const { handleOnCreate } = useBookContext();
	function handleOnChange(event) {
		setTitle(event.target.value);
	}

	function handleFormSumbit(event) {
		event.preventDefault();
		handleOnCreate(title);
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
