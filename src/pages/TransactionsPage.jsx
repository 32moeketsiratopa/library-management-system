import React, { useState, useEffect } from "react";
import { getData, saveData } from "../utils/localStorage";

function Transactions() {
  const [books, setBooks] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    setBooks(getData("books"));
    setTransactions(getData("transactions"));
  }, []);

  const updateStock = (index, change) => {
    const updatedBooks = [...books];

    // Prevent borrowing when there is no stock
    if (change < 0 && updatedBooks[index].quantity <= 0) {
      alert("This book is out of stock.");
      return;
    }

    updatedBooks[index].quantity =
      Number(updatedBooks[index].quantity) + change;

    saveData("books", updatedBooks);
    setBooks(updatedBooks);

    const newTransaction = {
      book: updatedBooks[index].title,
      change,
      date: new Date().toLocaleString(),
    };

    const updatedTransactions = [...transactions, newTransaction];

    saveData("transactions", updatedTransactions);
    setTransactions(updatedTransactions);
  };

  return (
    <div>
      <h2 className="page-title">Transactions</h2>

      <div className="card">
        <h3>Book Transactions</h3>
        <p className="form-description">
          Manage book borrowing and stock additions.
        </p>

        {books.length === 0 ? (
          <p>No books are currently available.</p>
        ) : (
          <div className="transaction-list">
            {books.map((book, index) => (
              <div className="transaction-book" key={index}>
                <div>
                  <h4>{book.title}</h4>
                  <p>
                    Author: {book.author}
                  </p>

                  <span
                    className={
                      Number(book.quantity) < 2
                        ? "stock-low"
                        : "stock-normal"
                    }
                  >
                    Stock: {book.quantity}
                  </span>
                </div>

                <div className="transaction-buttons">
                  <button
                    onClick={() => updateStock(index, 1)}
                  >
                    + Add Stock
                  </button>

                  <button
                    className="borrow-button"
                    onClick={() => updateStock(index, -1)}
                    disabled={Number(book.quantity) <= 0}
                  >
                    Borrow
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="card transaction-history">
        <h3>Transaction History</h3>

        {transactions.length === 0 ? (
          <p>No transactions have been recorded yet.</p>
        ) : (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Book</th>
                  <th>Change</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.book}</td>
                    <td>
                      <span
                        className={
                          transaction.change > 0
                            ? "transaction-positive"
                            : "transaction-negative"
                        }
                      >
                        {transaction.change > 0 ? "+" : ""}
                        {transaction.change}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Transactions;