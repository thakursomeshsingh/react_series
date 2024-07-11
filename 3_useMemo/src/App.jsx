import React, { useMemo, useState } from 'react'
import './App.css'

function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [count, setCount] = useState(0);

  // example 1
  // const sum = () =>{
  //     console.log("calculating sum ..!");
  //     return number1 + number2;
  //   };

    // example 2
  const sum = useMemo(
    () =>{
      console.log("calculating sum ..!");
      return number1 + number2;
    },[number1,number2]);

  return (
   <>
   <div className="App">
    <h1>useMemo function in react</h1>
    <input type="number" 
    value={number1} 
    onChange ={(e) => setNumber1(Number(e.target.value))} />
   
    <input type="number" 
    value={number2} 
    onChange ={(e) => setNumber2(Number(e.target.value))} />

    {/* example 1 */}
    {/* <p>Sum: {sum()}</p> */}

    {/* example 2 */}
    <p>sum : {sum}</p>

    {/* example 1 */}
    <h2>Count Number : {count}</h2>
    <button onClick={()=>setCount(count+1)}>count++</button>
    </div></>
  )
}

export default App
