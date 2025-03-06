import { useContext } from "react"
import { Context } from "../context/context"

let Todocontener = ()=>{
    let {array,removeItem} = useContext(Context)
  return <div className="todo-contener">
        {array.map((element,id)=>{
              return <div className="todo">
                        <h3>{id+1}</h3>
                       <h3>{element.name}</h3>
                       <h3>{element.date}</h3>
                        
                       <button className="remove-button" onClick={()=>removeItem(element)}>remove</button>
              </div>
        })}
            
  </div>
}
export default Todocontener