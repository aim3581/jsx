import axios from "axios";

const searchImages = async () => {
	const response = await axios.get("https://api.unsplash.com/search/photos", {
		headers: {
			Authorization: "Client-ID 8050V7bNzfKdVixwS9W9nZVdr0VnrCv9gmeimfdvp6Y",
		},
		params: {
			query: "cars",
		},
	});
	console.log(response);
	return response;
};

export async function createBook(title) {
	const response = await axios.post("http://localhost:3031/books", { title });
	return response.data;
}

export async function fetchBooks() {
	const response = await axios.get("http://localhost:3031/books");
	return response.data;
}

export async function updateBook(id, title) {
	const response = await axios.put(`http://localhost:3031/books/${id}`, {
		title,
	});
	return response.data;
}

export async function deleteBook(id) {
	const response = await axios.delete(`http://localhost:3031/books/${id}`);
	return response.data;
}

export default searchImages;
