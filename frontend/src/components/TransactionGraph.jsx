// eslint-disable-next-line no-unused-vars
import React from "react";
import { Line } from "react-chartjs-2";

const TransactionGraph = () => {
  const data = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Transactions",
        data: [200, 400, 100, 500],
        borderColor: "blue",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
      },
    ],
  };

  return (
    <div>
      <h3>Transaction Graph</h3>
      <Line data={data} />
    </div>
  );
};

export default TransactionGraph;
