import { useContext, useState } from "react";
import { Context } from "../context/context";

import Button from "./buttoncontener";
import Colorchange from "./colorsComponent";
import Editbutton from "./editbutton";

let Todocontener = () => {
  let { array} = useContext(Context);
  
   
  return (
    <div className="todo-contener">
      {array.map((element, id) => {
        return (
          <div className="todo">
           
           <Colorchange element={element} id ={id}/>
           <Button element={element}/>
           <Editbutton  element={element} id ={id} />
          </div>
        );
      })}
    </div>
  );
};
export default Todocontener;
