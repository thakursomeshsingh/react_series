import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import UserTotal from './UserTotal';

// after example 2: useEffect with condition

function App() {

// example 2 
// const[count,setcount] = useState(0);

//example 3
const[count, setCount] = useState(0);
const[total, setTotal] = useState(100);

// example 1,2
// useEffect(()=>{
//   alert("useEffect Hook")
//   console.log("useEffect Hook ",count);
// },[])  // dependency array: useEffect will call single time

// example 3
useEffect(()=>{
  console.log("useEffect Hook count");
},[count])  // dependency array: useEffect will call single time

useEffect(()=>{
  console.log("useEffect Hook total");
},[total])  // dependency array: useEffect will call single time
  

return (
  <>
  <div className='App'>

    {/* example 1 */}
    <h1> useEffect Hook</h1>

    {/* example 2 */}
    {/* <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>Update state</button> */}
    
    {/* example 3 */}

    <UserTotal total={total} count={count}/>
    {/* <h1>{count}</h1> */}
    <button onClick={()=>setCount(count+1)}>Update state</button>
   
    {/* <h1>{total}</h1> */}
    <button onClick={()=>setTotal(total+1)}>Update Total</button>
  </div >
  </>
  )
}

export default App
