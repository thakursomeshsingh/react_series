import React,{ useState, useTransition, useEffect } from 'react'
import './App.css'

function App() {
  // const [isPending, startTransition] = useTransition();
  // const [count, setCount] = useState(0);

  // // useEffect
  // useEffect(()=>{
  //   console.log("useState Run!!");
  // }, [count]);

  // const handleClick = () => {
  //   startTransition(()=>{
  //     setCount(count + 1);
  //     console.log("handleClick Run!!");
  //   })
  // }

  // example 2
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState();
  const [dataList, setDataList] = useState([]);

  const DataSize = 10000;

  // Function
  const handleChange = (e) => {
    setInput(e.target.value);
    startTransition(()=>{
      const a = [];
    for(let i=0;i<DataSize; i++){
      a.push(e.target.value);
    }
    setDataList(a);  
    })
   
  };

  return (
   <>
   <h1>useTransition Hook</h1>
 
   {/* example 1
   <h2>Count: {count}</h2>
   <button onClick={handleClick}>update Count</button> */}
  
  {/* example 2 */}
  <input type="text" value={input} onChange={handleChange} />
  {isPending ? "Loading..." : dataList.map((item, index)=>{
    return <div key={index}>{item}</div>;
  })}
  
   </>
  )
}

export default App
