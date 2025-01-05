// src/components/TransactionHistory.js
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const TransactionHistory = () => {
  const [transactions] = useState([
    { id: 1, amount: 50, type: 'credit', date: '2025-01-01 10:00:00' },
    { id: 2, amount: 30, type: 'debit', date: '2025-01-02 11:00:00' },
    { id: 3, amount: 20, type: 'credit', date: '2025-01-03 12:00:00' },
  ]);

  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((trans) => (
          <li key={trans.id}>
            {trans.type} of ${trans.amount} on {trans.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
