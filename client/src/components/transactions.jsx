export function Transactions({ transactions }) {
  return (
    <ul className="transactions">
      {transactions.map((transaction) => (
        <li key={transaction.id}>
          <p>{transaction.description}</p>
          <span>{transaction.amount}</span>
        </li>
      ))}
    </ul>
  );
}
