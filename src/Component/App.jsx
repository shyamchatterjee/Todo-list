import { useState } from 'react'

import '../App.css'
import Form from "./form";
import Todocontener from './todocontener';

function App() {
  return <div className='contener'>
             <Form/>
             <Todocontener/>
  </div>
}

export default App
