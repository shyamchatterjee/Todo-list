import { useContext, useState } from "react";
import { Context } from "../context/context";

let Colorchange = ({element,id}) => {
  let [Color,setColor] = useState("")
 let {chekFuntion,boolen,otherwiseFuntion} = useContext(Context)

  return (
    <>
       <input type="checkbox" name="" id="chek-box" onClick={()=>{boolen==true?chekFuntion(element):otherwiseFuntion()}} />
      <h3 style={{ color: Color }}>{id + 1}</h3>
      <h3 style={{ color: Color }}>{element.name}</h3>
      <h3 style={{ color: Color }}>{element.date}</h3>
      <div className="color-contener">
        <div
          className="red"
          onClick={() => {
            setColor("red");
          }}
        ></div>
        <div
          className="blue"
          onClick={() => {
            setColor("blue");
          }}
        ></div>
        <div
          className="green"
          onClick={() => {
            setColor("green");
          }}
        ></div>
        <div
          className="black"
          onClick={() => {
            setColor("black");
          }}
        ></div>
      </div>
    </>
  );
};
export default Colorchange;
