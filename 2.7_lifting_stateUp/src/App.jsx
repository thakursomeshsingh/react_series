import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponenet from './ChildComponenet';
import ChildComponentB from './ChildComponentB';

function App() {
  const [shareState, setSharedState] = useState("");

  const handleChange = (newvalue) => {
    console.log(newvalue);
    setSharedState(newvalue)
}

// example 2
const parentAlert = (data) => {
  alert(data);
}


  return (
    <>
    <div className='App'>
      <h1>lifting state up</h1>
      <ChildComponenet sharedState={shareState} handlechange={handleChange} />
      <ChildComponentB sharedState={shareState} alert={parentAlert}/>
    
    </div>
    </>
  )
}

export default App
