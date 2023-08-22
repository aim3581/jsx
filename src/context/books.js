import { createContext, useState } from "react";
import { createBook, deleteBook, updateBook } from "../Api";

const BooksContext = createContext();

function BooksProvider({ children }) {
	const [books, setBooks] = useState([]);

	async function createBook(title) {
		const book = await createBook(title);
		const temp = [...books, book];
		setBooks(temp);
	}

	async function editBook(id, newTitle) {
		await updateBook(id, newTitle);
		const temp = books.map((b) => (b.id == id ? { ...b, title: newTitle } : b));
		setBooks(temp);
	}

	async function deleteBook(id) {
		await deleteBook(id);
		const temp = books.filter((b) => b.id !== id);
		setBooks(temp);
	}

	const valueToShare = {
		books,
		handleOnCreate: createBook,
		handleEdit: editBook,
		handleDelete: deleteBook,
		setBooks,
	};
	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export { BooksProvider };
export default BooksContext;
