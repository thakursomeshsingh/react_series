import { useContext } from 'react';
import './App.css'
import { createContext } from 'react';
import Child1 from './Child1';

const MyContext = createContext();
const MyContextNew = createContext();

function App() {
  const sharedData = "Hello fromm Parent!!"
  const sharedDataNew = "Multiple Entry!!"

  return (
    <>
    <MyContext.Provider value={sharedData}>
     
     <MyContext.Provider value={sharedDataNew}>
     <h1>Context API</h1>
     <Child1 />
     </MyContext.Provider>

    </MyContext.Provider>
    
    </>
  )
}

export default App
export {MyContext, MyContextNew};
