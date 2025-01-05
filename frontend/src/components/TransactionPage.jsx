// src/components/TransactionPage.js
import { useState } from 'react';

const TransactionPage = () => {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('credit');
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = () => {
    if (!amount) return;

    const newTransaction = {
      id: transactions.length + 1,
      amount: parseFloat(amount),
      type,
      date: new Date().toLocaleString(),
    };

    setTransactions([...transactions, newTransaction]);
    setAmount('');
  };

  return (
    <div>
      <h2>Make a Transaction</h2>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select onChange={(e) => setType(e.target.value)} value={type}>
        <option value="credit">Credit</option>
        <option value="debit">Debit</option>
      </select>
      <button onClick={handleSubmit}>Submit Transaction</button>

      <h3>Transactions List</h3>
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

export default TransactionPage;
