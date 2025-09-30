const express = require("express");
const cors = require("cors");
const app = express();

const transactions = [
  { id: 1, amount: 100, description: "Transaction 1" },
  { id: 2, amount: 200, description: "Transaction 2" },
  { id: 3, amount: 300, description: "Transaction 3" },
];

app.use(cors());
app.use(express.json());

app.get("/transactions", (_req, res) => {
  res.json(transactions);
});

function handleCreateTransaction(req, res, transactions) {
  const { amount, description } = req.body;
  if (!amount || !description) {
    return res
      .status(400)
      .json({ message: "Amount and description are required" });
  }

  transactions.push({ id: transactions.length + 1, amount, description });
  return res.status(201).json({ message: "Transaction created successfully" });
}

app.post("/transactions", (req, res) => {
  handleCreateTransaction(req, res, transactions);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = {
  handleCreateTransaction,
};
