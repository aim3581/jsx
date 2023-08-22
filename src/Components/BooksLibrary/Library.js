import "./library.css";
import BookList from "./bookList";
import CreateBook from "./createBook";
import { useContext, useEffect } from "react";
import BooksContext from "../../context/books";

export default function Library() {
	const { fetchBooksData } = useContext(BooksContext);

	useEffect(() => {
		fetchBooksData();
	}, []);

	return (
		<div className="app">
			<h1>Reading List: </h1>
			<BookList />
			<CreateBook />
		</div>
	);
}
