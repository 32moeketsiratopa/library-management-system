import React, { useState, useEffect } from "react";
import { getData, saveData } from "../utils/localStorage";
import BookForm from "../components/BookForm";

function BookManagement() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getData("books"));
  }, []);

  const refreshBooks = () => setBooks(getData("books"));

  const deleteBook = (index) => {
    const updated = books.filter((_, i) => i !== index);
    saveData("books", updated);
    refreshBooks();
  };

  return (
    <div>
      <h2>Book Management</h2>
      <BookForm onBookAdded={refreshBooks} />
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            {book.title} - {book.author} ({book.quantity})
            <button onClick={() => deleteBook(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookManagement;
