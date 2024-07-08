import React from 'react'

function ChildComponenet({sharedState, handlechange}) {
  
//   example 1
const handleInputChange = (event) => {
    const newvalue = event.target.value;
    handlechange(newvalue);
}
    return (
    <div className="">
        <input type='text' value={sharedState} onChange={handleInputChange}/>
       
    </div>
  )
}

export default ChildComponenet