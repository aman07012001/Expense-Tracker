
function ContextMenu({ save,menu,menuPosition, setmenuPosition, expenses, setexpenses, deleteExpense,setformData,formData }) {
  const  [isSave,setisSave]=save
    const [ismenu,setismenu]=menu
   
   
    return (
        <div className="context-menu" style={menuPosition}>
            <div onClick={(e) => {
                 setmenuPosition({})
                setformData(deleteExpense)

                setismenu(false)
                setisSave(true)
                 }}>Edit</div>
            <div onClick={(e) => {
                 setmenuPosition({})
                let expenseArray = expenses
                let newExpense = expenseArray.filter((el) => el.id !== deleteExpense.id)
                let data=JSON.stringify(newExpense)
                localStorage.setItem("Data",data)
                setexpenses(newExpense)
                setismenu(false)
                setisSave(true)
                }}>Delete</div>
        </div>
    );
}

export default ContextMenu;