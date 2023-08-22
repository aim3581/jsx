import "./library.css";
import { useContext, useEffect, useState } from "react";
import BookList from "./bookList";
import CreateBook from "./createBook";
import { createBook, deleteBook, fetchBooks, updateBook } from "../../Api";
import BooksContext from "../../context/books";

export default function Library() {
	const { books, setBooks } = useContext(BooksContext);

	useEffect(async () => {
		const temp = await fetchBooks();
		setBooks(temp);
	}, []);

	return (
		<div className="app">
			<h1>Reading List: </h1>
			<BookList />
			<CreateBook />
		</div>
	);
}
