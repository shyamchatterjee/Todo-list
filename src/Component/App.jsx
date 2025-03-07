import { useState } from 'react'

import '../App.css'
import Form from "./form";
import Todocontener from './todocontener';

function App() {
  return <div className='contener'>
        <h2 style={{textAlign:"center",color:"white"}}>Todo list</h2>
             <Form/>
             <Todocontener/>
  </div>
}

export default App
