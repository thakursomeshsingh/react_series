import React,{memo} from 'react'

function ChildComponent({increment}) {
    console.log("child Renederd!!");
  return (
    <>
    <button onClick={increment}>Increment</button>
    </>
  )
}

export default memo(ChildComponent);