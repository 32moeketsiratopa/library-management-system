import React from "react";

function TransactionLog({ transactions }) {
  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((t, i) => (
          <li key={i}>
            {t.date}: {t.book} ({t.change > 0 ? "+" : ""}{t.change})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionLog;
