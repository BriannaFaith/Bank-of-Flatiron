import React, { useState } from "react";

const TransactionForm = ({ onAddTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    amount: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields, if needed

    // Call the onAddTransaction function with the new transaction
    onAddTransaction(newTransaction);

    // Reset the form after adding the transaction
    setNewTransaction({
      date: "",
      description: "",
      category: "",
      amount: "",
    });
  };

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="text"
            name="date"
            value={newTransaction.date}
            onChange={handleChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={newTransaction.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={newTransaction.category}
            onChange={handleChange}
          />
        </label>
        <label>
          Amount:
          <input
            type="text"
            name="amount"
            value={newTransaction.amount}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  );
};

export default TransactionForm;
