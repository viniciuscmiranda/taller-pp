import { useState } from "react";
import { useMutation } from "../hooks/use-mutation";

export function Form({ onSuccess }) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const { mutate, loading } = useMutation("/transactions", {
    onSuccess: () => {
      alert("Transaction created successfully");
      setAmount("");
      setDescription("");
      onSuccess?.();
    },
    onError: (error) => {
      alert(`Transaction creation failed: ${error.message}`);
    },
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await mutate({ amount: Number(amount), description });
  }

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>
        <span>Amount</span>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <label>
        <span>Description</span>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>

      <button type="submit" disabled={loading}>
        Submit {loading && "..."}
      </button>
    </form>
  );
}
