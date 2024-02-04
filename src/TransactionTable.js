import React from "react";

function TransactionTable({ transactions = [], onDeleteTransaction, onSortTransactions }) {

  const sortedTransactions = transactions;

  return (
    <table>


    <tbody>
        {sortedTransactions.map((transaction) => (
          <tr key={transaction.id}>
            <td>Date{transaction.date}</td>
            <td>Description{transaction.description}</td>
            <td>Category{transaction.category}</td>
            <td>Amount{transaction.amount}</td>
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
