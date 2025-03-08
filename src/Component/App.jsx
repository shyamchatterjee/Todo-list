import { useContext, useState } from 'react'

import '../App.css'
import Form from "./form";
import Todocontener from './todocontener';
import { Context } from '../context/context';

function App() {
  let {data} = useContext(Context)
  return <> <div className={data.length==0?"hide":"add-item-container"}> {data.map((element)=>{
         return <h3>{element.name}</h3>
  })} </div>
   <div className='contener'>
        <h2 style={{textAlign:"center",color:"white"}}>Todo list</h2>
             <Form/>
             <Todocontener/>
  </div>
</>
}

export default App
