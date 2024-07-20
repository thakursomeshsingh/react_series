import React,{ useState, useRef, useLayoutEffect } from 'react'
import './App.css'

function App() {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);
  console.log(elementRef);

  useLayoutEffect(()=> {
    if(elementRef.current){
      setWidth(elementRef.current.getBoundingClientRect().width);
    }
  }, []);

  return (
    <div className="App">
      <h1>useLayoutEffect Hooks</h1>

      <div>
        <h2>width Measurement Example</h2>
      </div>
      <div
      ref={elementRef}
      style={{
        width:"800px",
        background:"lightblue",
        margin:"auto"
      }}>
       Element Whos Width Is Measured. 
      </div>

      <p>Width: {width}px</p>
    </div>
  )
}

export default App
