import "./library.css";
import BookList from "./bookList";
import CreateBook from "./createBook";

export default function Library() {
	return (
		<div className="app">
			<h1>Reading List: </h1>
			<BookList />
			<CreateBook />
		</div>
	);
}
