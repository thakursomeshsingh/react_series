import React from 'react'

function ChildComponentB({sharedState, alert}) {
  
//   example 2
const data = "somesh singh"
    return (
    <div>
        <h3>sharedState: {sharedState}</h3>
        <button onClick={()=> alert(data)}>CLick me</button>
    </div>
  )
}

export default ChildComponentB