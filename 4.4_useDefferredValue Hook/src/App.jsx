import { useState, useEffect, useDeferredValue } from 'react'
import './App.css'
import List from './List';

function App() {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // example 2
  const [count, setCount]=useState(0);
  const DeferredValue = useDeferredValue(count);

  useEffect(()=>{
    console.log(`count: ${count} \nDeferred: ${DeferredValue}`);
  })

  return (
   <>
   <div className="App">
    <h1>useDiferredValue Hooks</h1>

    {/* example 1 */}
    <input type="text" value={input} onChange={handleChange} />
   
   <List input={input}/>

   {/* example 2 */}
   <h2>count: {count}</h2>
   <button onClick={()=>setCount(count + 1)}>Update Count</button>
   </div>
   </>
  );
}

export default App
