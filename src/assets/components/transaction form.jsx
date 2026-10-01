import React from "react";

function TransactionForm({ books, onUpdateStock }) {
  return (
    <ul>
      {books.map((book, i) => (
        <li key={i}>
          {book.title} ({book.quantity})
          <button onClick={() => onUpdateStock(i, 1)}>Add Stock</button>
          <button onClick={() => onUpdateStock(i, -1)}>Borrow</button>
        </li>
      ))}
    </ul>
  );
}

export default TransactionForm;
