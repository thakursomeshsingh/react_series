import { useState } from 'react';
import './App.css';
import useComponent from './useComponent';
import CounterComponent from './CounterComponent';

function App() {
  

  return (
   <div className="App">
    <h1>Custom Hooks</h1>

{/* example 1 */}
    <useComponent />
    <CounterComponent />
   </div>
  )
}

export default App
