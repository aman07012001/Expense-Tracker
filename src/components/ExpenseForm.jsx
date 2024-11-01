
import { v4 as uuidv4 } from 'uuid';
import Input from './Input';
import { useFormik } from 'formik';
function ExpenseForm({ setexpenses,value,save,expenses}) {
 const [isSave,setisSave]=save
 const [formData,setformData]=value
  function editData(){
    setexpenses((prevState)=>prevState.map((element)=>{
      if(element.id===formData.id){
        return {
          id:formData.id ,
          title:formData.title,
          category:formData.category,
          amount:formData.amount
        }
      }
      return element
    }))
  }

  // useFormik({
  //   initialValues:formData,
  //   onSubmit :(values)=>{

  //     console.log(values)
  //   }
  
  return (

    <form onSubmit={(e) => {
      e.preventDefault()
      {isSave?editData():setexpenses((prevState) => [...prevState, { ...formData, id: uuidv4() }])}
      
        setformData({
        title: "",
        category: "",
        amount: ""
      })
     
      setisSave(false)
      
      
    }} className="expense-form">

    
      <Input val={[formData, setformData]} label="Title" id="title" name="title"  />
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select onChange={(e) => setformData({ ...formData, category: e.target.value })} value={formData.category} name="category" >
          <option value="">All</option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input type="number" value={formData.amount} onChange={(e) => setformData({ ...formData, amount: e.target.value })} name="amount" id="amount" />
      </div>
      <button className="add-btn">{isSave?"save":"Add"}</button>
    </form>
  );
}

export default ExpenseForm;