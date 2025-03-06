import { createContext, useState } from "react";

export   let Context = createContext(null)
 export let ContextFuntion = ({children})=>{
    let [Obj,setObj] = useState({})
    let [array,setArray] = useState([])
    let addDeta = (data)=>{
       setArray([...array,data])
           
        setObj({...Obj,name : "",date:""})
      
    }
   let removeItem = (data)=>{
        let deleteItem =  array.filter((element)=>{
                   if (element.name!==data.name) {
                          return element
                   }
          }) 
          setArray(deleteItem)
   }
    return   <Context.Provider value={{Obj,setObj,addDeta,array,removeItem}}>
           {children}
       </Context.Provider>
 }
