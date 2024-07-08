import { useState } from 'react'
import './App.css'
import User from './User'

function App() {
// example 1 function to be passed as a props
const handleButtonClick = () => {
  console.log("Button clicked!");
};

// example 2 useState

const [count, setCount] = useState(0);
const incrementCount = () => {
  setCount(count +1);
};
  return (
   <>
   <div className='App'>
   <h2>props</h2>
   <User handleClick = {handleButtonClick}
   count={count}
   increment={incrementCount}
   />
   </div>
   </>
  )
}

export default App
