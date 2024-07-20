import React, { useRef } from 'react'
import './App.css'
import ChildComponent from './ChildComponent';

function App() {
  
  // example 1
  // const inputRef = useRef(null);
  // const updateInput = () => {
  //   inputRef.current.value = "1000";
  //   inputRef.current.focus();
  // };

  // example 2
  const childRef = useRef();

  const handleButtonClick = () => {
    if(childRef.current){
      childRef.current.handleButtonClick();
    }
  }

  return (
   <div className="App">
    <h1>forwordRef In React.</h1>

    {/* example 1 */}
    <ChildComponent ref={inputRef} />
    {/* <button onClick={updateInput}>Update Button</button> */}
    
    {/* example 2 */}
    <button onClick={handleButtonClick}>click child button from parent </button>
   </div>
  )
}

export default App
