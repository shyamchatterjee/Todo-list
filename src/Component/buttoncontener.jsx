import { useContext } from "react"
import { Context } from "../context/context"

let Button = ({element})=>{
    let {removeItem} = useContext(Context)
   return  <button
   className="remove-button"
   onClick={() => removeItem(element)}
 >
   remove
 </button>
}
export default Button