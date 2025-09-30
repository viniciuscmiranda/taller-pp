import { useState, useEffect } from "react";

const BASE_URL = "http://localhost:3000";

export function useQuery(endpoint) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const res = await fetch(`${BASE_URL}${endpoint}`);
      const data = await res.json();
      setData(data);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return { data, error, loading, refetch: fetchData };
}
