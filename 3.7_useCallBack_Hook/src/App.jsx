import React,{ useState, useCallback } from 'react'
import './App.css'
import ChildComponent from './ChildComponent';

function App() {

// example 1
  const [count, setCount1] = useState(0);
  console.log("parent rendered!! ");

// example 2
  const [count2, setCount2] = useState(0);
  const incrememtCount = useCallback(()=>{
    setCount2((prevCount)=>prevCount + 1);
    console.log("useCallBack Hook ");
  }, []);


  return (
   <div className="App">
    <h1>useCallBack hook In React</h1>

    {/* example 1 */}
    <p>count: {count}</p>
    <button onClick={()=>setCount1(count +1)}>increment Count</button>
<br />
    {/* example 2 */}
    <p>count2: {count2}</p>
<br />
    <ChildComponent increment={incrememtCount}/>
   </div>
  )
}

export default App
