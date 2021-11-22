import { client } from './client';

export const getBooks = () => client.get('/books');
export const getBookDetails = (id) => client.get(`/books/${id}`);
export const addBook = (book) => client.post('/books', book);
export const deleteBook = (id) => client.delete(`/books/${id}`);
export const updateBook = (id, book) => client.put(`/books/${id}`, book);
