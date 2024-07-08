import React,{ useState } from 'react';
import './App.css'
import RenderMethod from './RenderMethod';

function App(props) {
  const [name, setName] = useState("singh")
  
  return (
   <>
   <div className='App'>
    <h1> Render method in react</h1>

    {/* example 2 */}
    {/* <RenderMethod name={name} /> */}

    {/* example 3 */}
    <RenderMethod />

    {/* example 2 */}
    {/* <button onClick={()=> setName("somesh singh")}>Update Name</button> */}
   </div>
   </>
  )
}

export default App
