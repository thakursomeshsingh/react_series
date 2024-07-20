import React from 'react'
import { MyContext } from './App'
import { useContext } from 'react'


function Child2() {

const sharedData = useContext(MyContext);
console.log(sharedData);
  
return (
    <div>
        <h3>child2 Component</h3>
        <p>{sharedData}</p>
    </div>
  )
}

export default Child2