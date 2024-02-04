import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import TransactionForm from "./TransactionForm";
import TransactionTable from "./TransactionTable";

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [sortOrder, setSortOrder] = useState("asc"); // Default sorting order

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    console.log('Fetching transactions...')
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched transactions:' , data)
        setTransactions(data);
      })
      .catch((error) => {
        console.error("Error fetching transactions", error);
      });
  };

  const addTransaction = (newTransaction) => {
    newTransaction = { ...newTransaction, id: transactions.length + 1 };
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    setTransactions(updatedTransactions);
  };

  const filterTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchItem.toLowerCase())
  );

  const sortTransactions = (transactionsToSort) => {
    return transactionsToSort.sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
  };

  const handleSortChange = () => {
    // Toggle the sorting order between 'asc' and 'desc'
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleFilterChange = (searchTerm) => {
    setSearchItem(searchTerm);
  };

  return (
    <div>
      <h1>BANK OF FLATIRON</h1>
      <SearchBar onSearch={handleFilterChange} />
      <div>
        <h2>Bank Transactions</h2>
        <button onClick={handleSortChange}>Toggle Sort Order</button>
        <TransactionTable transactions={sortTransactions(filterTransactions)} onDeleteTransaction={deleteTransaction} />
        <TransactionForm onAddTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;
