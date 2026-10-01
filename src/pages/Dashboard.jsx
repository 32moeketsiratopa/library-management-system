import React, { useEffect, useState } from "react";
import { getData } from "../utils/localStorage";

function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getData("books"));
  }, []);

  const totalBooks = books.length;

  const totalStock = books.reduce(
    (total, book) => total + Number(book.quantity || 0),
    0
  );

  const lowStock = books.filter(
    (book) => Number(book.quantity || 0) < 2
  ).length;

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>

      <div className="card-container">

        <div className="card">
          <h3>📚 Total Books</h3>
          <p className="stat-number">{totalBooks}</p>
          <p>Books registered in the library</p>
        </div>

        <div className="card">
          <h3>📦 Total Stock</h3>
          <p className="stat-number">{totalStock}</p>
          <p>Total available copies</p>
        </div>

        <div className="card">
          <h3>⚠️ Low Stock</h3>
          <p className="stat-number">{lowStock}</p>
          <p>Books with less than 2 copies</p>
        </div>

      </div>

      <div className="card" style={{ marginTop: "25px" }}>
        <h3>Book Inventory</h3>

        {books.length === 0 ? (
          <p>No books have been added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Stock</th>
              </tr>
            </thead>

            <tbody>
              {books.map((book, index) => (
                <tr key={index}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td
                    style={{
                      color:
                        Number(book.quantity) < 2
                          ? "red"
                          : "inherit",
                      fontWeight:
                        Number(book.quantity) < 2
                          ? "bold"
                          : "normal",
                    }}
                  >
                    {book.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Dashboard;