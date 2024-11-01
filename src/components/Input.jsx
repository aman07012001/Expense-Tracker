function Input({label,errors,name,id,val}) {
     const [formData,setformData]=val
    return (
        <div className="input-container">
        <label htmlFor="title">{label}</label>
        <input value={formData.title}  onChange={(e) => setformData((prevState)=>({...prevState,title:e.target.value}))}  name={name} id={id} autoFocus/>
        <label style={{color:"red"}} htmlFor="title">{errors}</label>
      </div>
      );
}

export default Input;
