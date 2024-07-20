import { useState } from 'react'
import './App.css'
import Counter from './Counter';

function App() {

  // example 1
  const [count, setCount] = useState(0);
  
  return (
  <div className="App">
    <h1> useReducer Hook</h1>

    {/* example 1 */}
    <h2>Count : {count}</h2>
    <button onClick={()=>setCount(count+1)}>Incrememt Count</button>
    <button onClick={()=>setCount(count-1)}>Decrement Count</button>

    {/* example 2 */}
    <Counter/>
  </div>
  )
}

export default App
