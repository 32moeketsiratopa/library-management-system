import React, { useState } from "react";
import { saveData, getData } from "../../utils/localStorage";

function BookForm({ onBookAdded }) {
  const [book, setBook] = useState({ title: "", author: "", genre: "", isbn: "", quantity: 1 });

  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = getData("books");
    books.push(book);
    saveData("books", books);
    onBookAdded();
    setBook({ title: "", author: "", genre: "", isbn: "", quantity: 1 });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" value={book.title} onChange={handleChange} required />
      <input name="author" placeholder="Author" value={book.author} onChange={handleChange} required />
      <input name="genre" placeholder="Genre" value={book.genre} onChange={handleChange} />
      <input name="isbn" placeholder="ISBN" value={book.isbn} onChange={handleChange} />
      <input name="quantity" type="number" value={book.quantity} onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
}

export default BookForm;
