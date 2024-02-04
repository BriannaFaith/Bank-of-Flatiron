import React from "react";

function TransactionTable({ transactions = [], onDeleteTransaction, onSortTransactions }) {

  const sortedTransactions = transactions;

  return (
    <table>
      <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Delete</th>
            </tr>
        </thead>

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
