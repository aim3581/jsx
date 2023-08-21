import BookShow from "./BookShow";

export default function ({ books, onEdit, onDelete }) {
	const rederBooks = books.map(({ title, id }) => {
		return (
			<BookShow title={title} id={id} onDelete={onDelete} onEdit={onEdit} />
		);
	});
	return <div className="book-list">{rederBooks}</div>;
}
