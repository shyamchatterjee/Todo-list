import { useContext } from "react"
import { Context } from "../context/context"

let Editbutton = ({element,id})=>{
    let {editFuntion} = useContext(Context)
   return  <button className="edit-button" onClick={()=>{editFuntion(element,id)}}>Edit</button>

           
}
export default Editbutton