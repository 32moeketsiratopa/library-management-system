import React, { useEffect, useState } from "react";
import { getData } from "../utils/localStorage";

function Dashboard() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getData("books"));
  }, []);

  return (
    <div>
      <h2>Library Dashboard</h2>
      <table border="1" style={{ width: "100%" }}>
        <thead>
          <tr>
            <th>Title</th><th>Author</th><th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, i) => (
            <tr key={i} style={{ color: book.quantity < 2 ? "red" : "black" }}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
