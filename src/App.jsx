import React, { useState } from "react";
import "./App.css"
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import expenseData from "./components/expenseData";
function App() {

  const [expenses, setexpenses] = useState(JSON.parse(localStorage.getItem("Data")))
  const [formData, setformData] = useState({
    title: "",
    
    category: "",
    amount: 0
  })
  const [ismenu, setismenu] = useState(false)
  const [isSave, setisSave] = useState(false)


  return (
    <main>
      <ExpenseForm save={[isSave, setisSave]} menu={[ismenu, setismenu]} expenses={expenses} setexpenses={setexpenses} value={[formData, setformData]} />
      <ExpenseTable save={[isSave, setisSave]} menu={[ismenu, setismenu]} expenses={expenses} setexpenses={setexpenses} formData={formData} setformData={setformData} />
    </main>
  )
}

export default App;