import { useState } from "react";
import EditBook from "./EditBook";

export default function BookShow({ title, id, onDelete, onEdit }) {
	const [showEdit, setShowEdit] = useState(false);
	function handleOnDeleteClick() {
		onDelete(id);
	}
	function handleOnEditClick() {
		setShowEdit(!showEdit);
	}
	function handleOnEditSave(newTitle) {
		onEdit(id, newTitle);
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
