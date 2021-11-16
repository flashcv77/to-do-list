import client from "./client";

export const getBooks = () => client.get("/books");
export const getBookDetails = (id) => client.get(`/books/${id}`);
export const addBook = (bookObj) => client.post("/books", bookObj);
export const deleteBook = (id) => client.delete(`/books/${id}`);
export const updateBook = (id, bookObj) => client.put(`/books/${id}`, bookObj);