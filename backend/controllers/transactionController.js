const Transaction = require("../models/Transaction");

const getTransactions = async (req, res) => {
  const transactions = await Transaction.find({ userId: req.user.id });
  res.status(200).json(transactions);
};

const addTransaction = async (req, res) => {
  const { amount, description } = req.body;
  const transaction = await Transaction.create({
    userId: req.user.id,
    amount,
    description,
  });
  res.status(201).json(transaction);
};

module.exports = { getTransactions, addTransaction };
