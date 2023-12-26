import React, { createContext, useState } from 'react'
 const AuthContext = createContext();

 export const Authprovider = ({children}) => {
    const [Input, setInput] = useState( 
        {
         name:"", 
         email:"",
        }
       );
       const [tabledata, settabledata] = useState([]);
       const [editClick, seteditClick] = useState(false); 
       const [EditIndex, setEditIndex] = useState("");
       const handleChange =(e)=>{
        setInput(
          {
            ...Input, [e.target.name]:e.target.value,
          }
        )
        }
      
        
        const Delete =(index)=>{
          const filterData = tabledata.filter((item, i)=> i!==index)
          settabledata (filterData)
      
        }
        const Edit = (index)=>{
          const tempdata = tabledata[index]
          setInput (
            {
              name:tempdata.name,
              email:tempdata.email,
            }
            )
            seteditClick(true)
            setEditIndex(index)
        }
  return (
  <AuthContext.Provider value={{Input, setInput,tabledata, settabledata,editClick, seteditClick,EditIndex, setEditIndex,handleChange, Edit, Delete}}>
    {children}
  </AuthContext.Provider>
  )
}

export default AuthContext
