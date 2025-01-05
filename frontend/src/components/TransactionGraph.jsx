// src/components/TransactionGraph.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const TransactionGraph = () => {
  const data = {
    labels: ['2025-01-01', '2025-01-02', '2025-01-03'],
    datasets: [
      {
        label: 'Transactions',
        data: [50, -30, 20], // Positive for credit, negative for debit
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Transaction Graph</h2>
      <Bar data={data} />
    </div>
  );
};

export default TransactionGraph;
