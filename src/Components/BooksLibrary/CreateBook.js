import { useContext, useState } from "react";
import BooksContext from "../../context/books";
export default function () {
	const [title, setTitle] = useState("");
	const { handleOnCreate } = useContext(BooksContext);
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
