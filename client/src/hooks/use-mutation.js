import { useState } from "react";

const BASE_URL = "http://localhost:3000";

export function useMutation(endpoint, { onSuccess, onError } = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  async function mutate(body) {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message);
      }

      const data = await res.json();
      setData(data);
      onSuccess?.(data);
    } catch (error) {
      onError?.(error);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, mutate };
}
