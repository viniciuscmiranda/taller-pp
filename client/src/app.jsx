import { Form } from "./components/form";
import { Transactions } from "./components/transactions";
import { useQuery } from "./hooks/use-query";

import "./css/styles.css";

export function App() {
  const { data, error, loading, refetch } = useQuery("/transactions");

  function render() {
    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return <Transactions transactions={data} />;
  }

  return (
    <main className="app">
      <Form onSuccess={refetch} />
      {render()}
    </main>
  );
}
