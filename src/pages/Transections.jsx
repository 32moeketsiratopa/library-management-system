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
    updatedBooks[index].quantity += change;
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
      <h2>Transactions</h2>
      <ul>
        {books.map((book, i) => (
          <li key={i}>
            {book.title} ({book.quantity})
            <button onClick={() => updateStock(i, 1)}>Add Stock</button>
            <button onClick={() => updateStock(i, -1)}>Borrow</button>
          </li>
        ))}
      </ul>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((t, i) => (
          <li key={i}>{t.date}: {t.book} ({t.change > 0 ? "+" : ""}{t.change})</li>
        ))}
      </ul>
    </div>
  );
}

export default Transactions;
