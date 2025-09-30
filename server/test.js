const { handleCreateTransaction } = require("./main");

console.log("handleCreateTransaction");
console.log("it should create a transaction");

const req = { body: { amount: 100, description: "Test" } };
const res = { status: () => res, json: () => res };
const transactions = [];

handleCreateTransaction(req, res, transactions);

if (transactions.length === 1) {
  console.log("Transaction created successfully");
} else {
  throw new Error("Transaction creation failed");
}
