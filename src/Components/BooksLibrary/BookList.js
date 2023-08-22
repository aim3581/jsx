import { useContext } from "react";
import BookShow from "./bookShow";
import BooksContext from "../../context/books";

export default function () {
	const { books } = useContext(BooksContext);
	const rederBooks = books.map(({ title, id }) => {
		return <BookShow title={title} id={id} />;
	});
	return <div className="book-list">{rederBooks}</div>;
}
