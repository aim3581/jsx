import BookShow from "./bookShow";
import useBookContext from "../../hooks/use-book";

export default function () {
	const { books } = useBookContext();

	const rederBooks = books.map(({ title, id }) => {
		return <BookShow key={id} title={title} id={id} />;
	});

	return <div className="book-list">{rederBooks}</div>;
}
