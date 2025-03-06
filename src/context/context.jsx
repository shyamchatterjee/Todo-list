import { createContext, useState } from "react";

export   let Context = createContext(null)
 export let ContextFuntion = ({children})=>{
    let [Obj,setObj] = useState({})
    let [array,setArray] = useState([])
    let addDeta = (data)=>{
       setArray([...array,data])
    }

    return   <Context.Provider value={{Obj,setObj,addDeta,array}}>
           {children}
       </Context.Provider>
 }
