import React from "react";

function TransactionTable({ transactions = [], onDeleteTransaction, onSortTransactions }) {

  const sortedTransactions = transactions;

  return (
    <table>
        <thead>Date</thead>
        <thead>Description</thead>
        <thead>Category</thead>
        <thead>Amount</thead>

      <tbody>
        {sortedTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td>{transaction.category}</td>
            <td>{transaction.amount}</td>
            <td>
              <button onClick={() => onDeleteTransaction(transaction.id)}>X</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
