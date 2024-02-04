import React, {useState,useEffect} from "react";
import SearchBar from "./SearchBar";


function App() {
  const [transactions, setTransactions] = useState([]);


  useEffect(()=>{
    fetchTransactions();
  }, []);

  const fetchTransactions = () => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      })
      .catch((error) => {
        console.error("Error fetching transactions", error);
      });
  };

  const addTransaction =(newTransaction)=>{
    newTransaction={ ...newTransaction, id:transactions.length +1 };
    setTransactions([...transactions, newTransaction]);
  };

  const deleteTransaction= ()

  const filterTransactions= transactions.filter(transaction =>transaction.description,toLowerCase())
  const sortTransactions= (filterTransactions) =>{

  }
  return(
    <div>
      <h1>BANK OF FLATIRON</h1>

      <SearchBar />
      <TransactionForm />
      
    </div>
  )
}

export default App;
