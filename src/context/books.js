import { createContext, useEffect, useState } from "react";
import { createBook, deleteBook, fetchBooks, updateBook } from "../Api";

const BooksContext = createContext();

function BooksProvider({ children }) {
	const [books, setBooks] = useState([]);

	async function create(title) {
		const book = await createBook(title);
		const temp = [...books, book];
		setBooks(temp);
	}

	async function edit(id, newTitle) {
		await updateBook(id, newTitle);
		const temp = books.map((b) => (b.id == id ? { ...b, title: newTitle } : b));
		setBooks(temp);
	}

	async function remove(id) {
		await deleteBook(id);
		const temp = books.filter((b) => b.id !== id);
		setBooks(temp);
	}

	const valueToShare = {
		books,
		handleOnCreate: create,
		handleEdit: edit,
		handleDelete: remove,
	};

	useEffect(() => {
		(async () => {
			const temp = await fetchBooks();
			console.log("$$$$$$$$$$$ in books context $$$$$$$$$$");
			setBooks(temp);
		})();
	}, []);

	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export { BooksProvider };
export default BooksContext;
