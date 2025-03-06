import { useContext, useState } from "react";
import { Context } from "../context/context";
//  import Colorchange from "./colorsComponent";
import Button from "./buttoncontener";

let Todocontener = () => {
  let { array } = useContext(Context);
  
   
  return (
    <div className="todo-contener">
      {array.map((element, id) => {
        return (
          <div className="todo">
            <h3 style={{color:Color}}>{id + 1}</h3>
            <h3 style={{color:Color}}>{element.name}</h3>
            <h3 style={{color:Color}}>{element.date}</h3>
           
           <Button element={element}/>
          </div>
        );
      })}
    </div>
  );
};
export default Todocontener;
