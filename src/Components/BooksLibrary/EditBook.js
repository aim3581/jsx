import { useState } from "react";
import useBookContext from "../../hooks/use-book";

export default function EditBook({ id, title, onSave }) {
	const [newtitle, setNewTitle] = useState(title);
	const { handleEdit } = useBookContext();
	function handleOnChange(event) {
		setNewTitle(event.target.value);
	}

	function handleFormSumbit(event) {
		event.preventDefault();
		handleEdit(id, newtitle);
		onSave(newtitle);
	}
	return (
		<div className="book-edit">
			<form onSubmit={handleFormSumbit}>
				<label>Title</label>
				<input
					type="text"
					className="input"
					value={newtitle}
					onChange={handleOnChange}
				/>
				<button className="button is-primary">Save</button>
			</form>
		</div>
	);
}
