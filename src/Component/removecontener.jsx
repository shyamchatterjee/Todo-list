import { useContext } from "react"
import { Context } from "../context/context"
import { IoRemoveCircleOutline } from "react-icons/io5";

let Button = ({element})=>{
    let {removeItem} = useContext(Context)
   return <IoRemoveCircleOutline style={{cursor:"pointer"}}   onClick={() => removeItem(element)} />
}
export default Button