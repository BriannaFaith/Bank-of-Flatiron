import React from "react";

function TransactionTable({ transactions = [], onDeleteTransaction, onSortTransactions }) {
  // Assuming you have a state variable for sorting, you can use it in the sortedTransactions array
  const sortedTransactions = transactions;

  return (
    <table>
      
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
