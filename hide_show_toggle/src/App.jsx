import React,{ useState } from 'react'
import './App.css'

function App() {
  
 const[status, setStatus] = useState(true);

  return (
    <>
      <div className='App'>
        <h1>Show, Hide & Toggle</h1>

        {status ? <div className='status'>Content</div> : null}

        {/* example 1 */}
        <button onClick={()=>setStatus(false)}>Hide</button>
        <button onClick={()=>setStatus(true)}>Show</button>
      
      {/* example 2 toggle */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>

      </div>
    </>
  )
}

export default App
