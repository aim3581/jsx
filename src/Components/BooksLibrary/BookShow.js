import { useState } from "react";
import EditBook from "./editBook";
import useBookContext from "../../hooks/use-book";

export default function BookShow({ title, id }) {
	const [showEdit, setShowEdit] = useState(false);
	const { handleDelete } = useBookContext();

	function handleOnDeleteClick() {
		handleDelete(id);
	}

	function handleOnEditClick() {
		setShowEdit(!showEdit);
	}

	function handleOnEditSave(newTitle) {
		setShowEdit(false);
	}

	let content = <h3> {title} </h3>;

	if (showEdit) {
		content = <EditBook onSave={handleOnEditSave} title={title} id={id} />;
	}

	return (
		<div className="book-show">
			<img src={`https://picsum.photos/seed/${id}/200/300`} alt={title} />
			{content}
			<div className="actions">
				<button className="edit" onClick={handleOnEditClick}>
					Edit
				</button>
				<button className="delete" onClick={handleOnDeleteClick}>
					Delete
				</button>
			</div>
		</div>
	);
}
