import { useContext } from "react"
import { Context } from "../context/context"

let Form = ()=>{
     let {Obj,setObj,addDeta} = useContext(Context)
  return  <form className="form" onSubmit={(e)=>{e.preventDefault(),addDeta(Obj)}}>
       <input type="text" name="" id="input-text" placeholder="Enter todo name" onChange={(e)=>{setObj({...Obj,name:e.target.value})}} />
       <input type="date" name="" id="input-date"  onChange={(e)=>{setObj({...Obj,date:e.target.value})}} />
       <input className="submit-button" type="submit" value="Add"  />
  </form>
}
export  default Form