import { createContext, useState } from "react";

export   let Context = createContext(null)
 export let ContextFuntion = ({children})=>{
    let [Obj,setObj] = useState({})
    let [array,setArray] = useState([])
    let [Id,setId] = useState("")
     let [data,setdata] = useState([])
        let [bollen,setboolen] = useState(false)
     //    let [boolen,setboolens] = useState(true)
        
    let addDeta = (data)=>{
       setArray([...array,data])
           
        setObj({...Obj ,name : "",date:""})
      
    }
   let removeItem = (data)=>{
        let deleteItem =  array.filter((element)=>{
                   if (element.name!==data.name) {
                          return element
                   }
          }) 
          setArray(deleteItem)
   }
   let editFuntion = (data,id)=>{
           setObj({...Obj, ...data})
           setId(id)
           setboolen(true)
   }
  let updateSubmit = (data,dataid)=>{
     
         
    let updatedata =  array.map((element,id)=>{
         if (id==dataid) {
              return data
         }else{
              return element
         }
      })
     setArray(updatedata)
      setObj({...Obj,name:"",date:""})
      setboolen(false)
  }
  let checkFuntion = (element)=>{
       setdata([...data,element])
     //   setboolens(false)

  }
  
 
    return   <Context.Provider value={{Obj,setObj,addDeta,array,removeItem,editFuntion,bollen,updateSubmit,Id,checkFuntion,data}}>
          {children}
       </Context.Provider>
 }
