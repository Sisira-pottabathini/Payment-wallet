// eslint-disable-next-line no-unused-vars
import React from "react";

const TransactionHistory = () => {
  const transactions = [
    { id: 1, amount: 200, description: "Grocery Shopping" },
    { id: 2, amount: 500, description: "Electronics Purchase" },
  ];

  return (
    <div>
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((txn) => (
          <li key={txn.id}>
            {txn.amount} - {txn.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
