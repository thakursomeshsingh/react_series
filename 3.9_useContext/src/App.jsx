import { useState, createContext } from 'react';
import './App.css';
import Child1 from './Child1';

// Create, Provider, useContext
const MyContext = createContext();

function App() {
  const sharedData = "Hello from Parent!!";
  
  return (
    <>
      <MyContext.Provider value={sharedData}>
        <h1>useContext Hook</h1>
        <Child1 />
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
