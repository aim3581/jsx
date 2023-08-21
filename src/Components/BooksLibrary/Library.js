import "./Library.css";
import { useState } from "react";
import BookList from "./BookList";
import CreateBook from "./CreateBook";
export default function Library() {
	const [books, setBooks] = useState([]);
	function handleOnCreate(title) {
		const temp = [...books, { id: Math.round(Math.random() * 9999), title }];
		setBooks(temp);
	}

	function handleEdit(id, newTitle) {
		const temp = books.map((b) => (b.id == id ? { ...b, title: newTitle } : b));
		setBooks(temp);
	}

	function handleDelete(id) {
		const temp = books.filter((b) => b.id !== id);
		setBooks(temp);
	}
	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
			<CreateBook onSubmit={handleOnCreate} />
		</div>
	);
}
