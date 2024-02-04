import React, {useState,useEffect} from "react";


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

  return(
    <div>
      <h1>BANK OF FLATIRON</h1>
    </div>
  )
}

export default App;
