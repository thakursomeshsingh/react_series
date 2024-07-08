import React from 'react'
import { useState } from 'react'
import './App.css'
import ChildComponent from './ChildComponent'

function App() {
  const [count, setCount] = useState(0)

  console.log("parent component rendered!!");

  return (
   <>
   <div className='App'>
    <h1> Memo in React.</h1>

    <ChildComponent /> //if we pass props here then state will update 
    then ChildComponent will re-render again and again according to change in state

    <h2>Count : {count}</h2>
    <button onClick={() => setCount(count+1)}>Count+</button>

   </div>
   </>
  )
}

export default App
