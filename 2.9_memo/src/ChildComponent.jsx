import React,{ memo } from 'react'

function ChildComponent() {
    // example 2
    console.log("Child component rendered!!");
  return (
<>
    <h3>Child Component count :</h3>
</>
);
}

export default memo(ChildComponent);