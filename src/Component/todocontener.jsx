import { useContext } from "react"
import { Context } from "../context/context"

let Todocontener = ()=>{
    let {array} = useContext(Context)
  return <div className="todo-contener">
        {array.map((element)=>{
              return <div className="todo">
                       <h3>{element.name}</h3>
                       <h3>{element.date}</h3>
                       <button className="remove-button">remove</button>
              </div>
        })}
            
  </div>
}
export default Todocontener