import { useContext, useState } from "react";
import EditBook from "./editBook";
import BooksContext from "../../context/books";

export default function BookShow({ title, id }) {
	const [showEdit, setShowEdit] = useState(false);
	const { handleDelete, handleEdit } = useContext(BooksContext);

	function handleOnDeleteClick() {
		handleDelete(id);
	}

	function handleOnEditClick() {
		setShowEdit(!showEdit);
	}

	function handleOnEditSave(newTitle) {
		handleEdit(id, newTitle);
		setShowEdit(false);
	}

	let content = <h3> {title} </h3>;

	if (showEdit) {
		content = <EditBook onSave={handleOnEditSave} title={title} />;
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
