import { expect, describe, it } from "vitest";
import { handleCreateTransaction } from "./main";

describe("handleCreateTransaction", () => {
  it("should create a transaction", () => {
    const req = { body: { amount: 100, description: "Test" } };
    const res = { status: () => res, json: () => res };
    const transactions = [];

    handleCreateTransaction(req, res, transactions);
    expect(transactions.length).toBe(1);

    handleCreateTransaction(req, res, transactions);
    expect(transactions.length).toBe(2);
  });
});
