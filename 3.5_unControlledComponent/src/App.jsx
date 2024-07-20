import React, { useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);

  const submitForm =(e)=>{
    e.preventDefault();
    console.log("first input Value:", inputRef.current.value);
    console.log("Second input Value:", inputRef2.current.value);
   
    let input3 = document.getElementById("input3").value;
    console.log("input3 value:", input3);
  }


  return (
   <div className="App">
    <h1>UnControlled Component</h1>

    <form onSubmit={submitForm}>
      <input type="text" ref={inputRef} />
      <input type="text" ref={inputRef2} />
      

      <input type="text" id='input3' />

      <button>Submit</button>

    </form>
   </div>
  )
}

export default App
