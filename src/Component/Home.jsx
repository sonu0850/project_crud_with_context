import React from 'react'
import useAuth from '../Context/useAuth'

const Home = () => {
  const {Input, setInput,tabledata, settabledata,editClick, seteditClick,EditIndex, setEditIndex}=useAuth()
  
  
  const handleChange =(e)=>{
  setInput(
    {
      ...Input, [e.target.name]:e.target.value,
    }
  )
  }

  const handleSubmit =(e)=>{
    e.preventDefault()
   if (editClick) {
    const temptabledata =tabledata 
    Object.assign(temptabledata[EditIndex], Input)
    settabledata ([...temptabledata])
    seteditClick(false)
    setInput({
      name:"", 
      email:"",
     })

    
   } else {
    settabledata ([...tabledata, Input])
    setInput(
      {
        name:"", 
        email:"",
       }
    );
    
   }
    
  }
  
  
  return (
    <div>
      <div className='form'>
        <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder='Name' name='name' value={Input.name} onChange={handleChange} />
        <label>Email</label>
        <input type="text" placeholder='Email' name='email' value={Input.email} onChange={handleChange}  /> <br />
        <button  type='submit' className='mt-4 btn btn-danger '  > {editClick?"Update":"Submit"}</button>
        </form>

      </div>
  
    </div>
  )
}

export default Home
