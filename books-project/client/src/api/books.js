import { client } from './client';

// export const getBooks = () => client.get('/books');
// export const getBookDetails = (id) => client.get(`/books/${id}`);
// export const addBook = (book) => client.post('/books', book);
// export const deleteBook = (id) => client.delete(`/books/${id}`);
// export const updateBook = (id, book) => client.put(`/books/${id}`, book);

export const getBooks = () => client.get('/books')
  .then((response) => response.data)
  .catch((error) => { throw error; });

export const getBookDetails = (id) => client.get(`/books/${id}`)
  .then((response) => response)
  .catch((error) => { throw error; });

export const addBook = (book) => client.post('/books', book)
  .catch((error) => { throw error; });

export const deleteBook = (id) => client.delete(`/books/${id}`)
  .catch((error) => { throw error; });

export const updateBook = (id, book) => client.put(`/books/${id}`, book)
  .catch((error) => { throw error; });
