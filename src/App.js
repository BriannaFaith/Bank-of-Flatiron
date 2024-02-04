//importing useState, useEffect hooks and components
import React, { useState, useEffect } from "react";

import SearchBar from "./components/SearchBar";
import TransactionForm from "./components/TransactionForm";
import TransactionTable from "./components/TransactionTable";

//main component
function App() {
  const [transactions, setTransactions] = useState([]); // useState to manage and update the variables
  const [searchItem, setSearchItem] = useState('');
  const [sortOrder, setSortOrder] = useState("asc");

  // useEffect hook to fetch transactions when the component mounts
  useEffect(() => {
    fetchTransactions();
  }, []);

  //fetchTransactions to fetch data ffrom the server
  const fetchTransactions = () => {
    console.log('Fetching transactions...')
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched transactions:' , data)
        setTransactions(data);//updates
      })
      .catch((error) => {
        console.error("Error fetching transactions", error);
      });
  };

  // addTranscation to add a new transaction
  const addTransaction = (newTransaction) => {
    newTransaction = { ...newTransaction, id: transactions.length + 1 };
    setTransactions([...transactions, newTransaction]);
  };
// delete a transaction
  const deleteTransaction = (transactionId) => {
    const updatedTransactions = transactions.filter(
      (transaction) => transaction.id !== transactionId
    );
    setTransactions(updatedTransactions);
  };
// filter transactions based on search item
  const filterTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchItem.toLowerCase())
  );
// sort transaction
  const sortTransactions = (transactionsToSort) => {
    return transactionsToSort.sort((a, b) => {
      if (sortOrder === "asc") {
        return new Date(a.date) - new Date(b.date);
      } else {
        return new Date(b.date) - new Date(a.date);
      }
    });
  };
// handles the toggling of sorting order
  const handleSortChange = () => {
    // Toggle the sorting order between 'asc' and 'desc'
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };
// handling changes in the search term
  const handleFilterChange = (searchTerm) => {
    setSearchItem(searchTerm);
  };

  //Rendering
  return (
    <div>
      <h1>BANK OF FLATIRON</h1>
      <SearchBar onSearch={handleFilterChange} />
      <div>
        <h2>Bank Transactions</h2>
        <button onClick={handleSortChange}>Sort Transactions</button>
        <TransactionTable transactions={sortTransactions(filterTransactions)} onDeleteTransaction={deleteTransaction} />
        <TransactionForm onAddTransaction={addTransaction} />
      </div>
    </div>
  );
}

export default App;
