import React, { useRef } from 'react'
import './App.css'

function App() {
  const inputRef = useRef(null);

  // example 2
  const handleButtonClick = () => {
    const inputValue = inputRef.current.value;
    alert(`Input value: ${inputValue}`);
  }

  return (
   <>
   <div className="App">
    <h1>useRef in react</h1>

    {/* example 1 */}
    <input ref={inputRef} type="text" />
    <button onClick={handleButtonClick}>Get input</button>
    </div></>
  )
}

export default App
