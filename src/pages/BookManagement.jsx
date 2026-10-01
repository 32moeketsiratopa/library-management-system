import React, { useEffect, useState } from "react";
import { getData, saveData } from "../utils/localStorage";
import BookForm from "../assets/components/book form.jsx";

function BookManagement() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getData("books"));
  }, []);

  const addBook = (book) => {
    const updatedBooks = [...books, book];
    saveData("books", updatedBooks);
    setBooks(updatedBooks);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    saveData("books", updatedBooks);
    setBooks(updatedBooks);
  };

  return (
    <div>
      <h2 className="page-title">Book Management</h2>

      <div className="book-page-grid">

        <div className="card">
          <h3>Add New Book</h3>
          <p className="form-description">
            Enter the details of a new book below.
          </p>

          <BookForm onAdd={addBook} />
        </div>

        <div className="card">
          <h3>Book Inventory</h3>

          {books.length === 0 ? (
            <p>No books have been added yet.</p>
          ) : (
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Stock</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {books.map((book, index) => (
                    <tr key={index}>
                      <td>{book.title}</td>
                      <td>{book.author}</td>

                      <td>
                        <span
                          className={
                            Number(book.quantity) < 2
                              ? "stock-low"
                              : "stock-normal"
                          }
                        >
                          {book.quantity}
                        </span>
                      </td>

                      <td>
                        <button
                          className="delete-button"
                          onClick={() => deleteBook(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default BookManagement;