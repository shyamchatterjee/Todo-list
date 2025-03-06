import { useContext, useState } from "react";
import { Context } from "../context/context";
import Colorchange from "./colorsComponent";
import Button from "./buttoncontener";
// import Colorchange from "./colorsComponent"

let Todocontener = () => {
  let { array, removeItem,Color } = useContext(Context);
  
  return (
    <div className="todo-contener">
      {array.map((element, id) => {
        return (
          <div className="todo" style={{ color: Color }}>
            <h3>{id + 1}</h3>
            <h3>{element.name}</h3>
            <h3>{element.date}</h3>
             <Colorchange/>
           <Button/>
          </div>
        );
      })}
    </div>
  );
};
export default Todocontener;
