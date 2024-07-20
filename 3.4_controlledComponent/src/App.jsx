import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");

  const handleChange= (e)=>{
   setInputValue(e.target.value);
   console.log(inputValue);
  }
  return (
  <div className="App">
    <h1>Controlled Component</h1>

    {/* example 1 */}
    <input type="text" value={inputValue} onChange={handleChange} />
    <p>Current Value: {inputValue}</p>
  </div>
  )
}

export default App
