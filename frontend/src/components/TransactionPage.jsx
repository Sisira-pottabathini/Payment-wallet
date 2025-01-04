// eslint-disable-next-line no-unused-vars
import React from "react";
import TransactionHistory from "./TransactionHistory";
import TransactionGraph from "./TransactionGraph";

const TransactionPage = () => {
  return (
    <div>
      <h1>Transaction Page</h1>
      <TransactionHistory />
      <TransactionGraph />
    </div>
  );
};

export default TransactionPage;
