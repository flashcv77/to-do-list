import client from "./client";

export const getBooks = () => client.get("/books");
export const getBookDetails = (id) => client.get(`/books/${id}`);
export const addBook = (bookObj) => client.post("/books", bookObj);