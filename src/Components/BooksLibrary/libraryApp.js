import { BooksProvider } from "../../context/books";
import Library from "./library";

export default function LibraryApp() {
	return (
		<BooksProvider>
			<Library />
		</BooksProvider>
	);
}
