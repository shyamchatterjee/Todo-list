import { useContext } from "react"
import { Context } from "../context/context"
import { FaRegEdit } from "react-icons/fa";


let Editbutton = ({element,id})=>{
    let {editFuntion} = useContext(Context)
   return  <FaRegEdit style={{cursor:"pointer"}}  onClick={()=>{editFuntion(element,id)}} />

           
}
export default Editbutton