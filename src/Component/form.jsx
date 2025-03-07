import { useContext } from "react"
import { Context } from "../context/context"

let Form = ()=>{
     let {Obj,setObj,addDeta,updateObj,setupdateObj,updateSubmit,bollen,Id} = useContext(Context)
         
  return  <> <form className="form" onSubmit={(e)=>{e.preventDefault(),bollen==false?addDeta(Obj):updateSubmit(Obj,Id)}}>
       <input type="text" name=""  id="input-text" placeholder="Enter todo name" value={Obj.name}  onChange={(e)=>{setObj({...Obj,name:e.target.value})}} />
       <input type="date" name="" id="input-date"  value={Obj.date} onChange={(e)=>{setObj({...Obj,date:e.target.value})}} />
       <input className="submit-button" type="submit" value={bollen==false?"Add":"Update"} />
  </form>
  
</>
}
export  default Form