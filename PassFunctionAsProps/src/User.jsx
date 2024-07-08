import React from 'react'

function User(props) {
    console.log(props);
  return (
    <>
    <h1>User Component</h1>

    {/* example 1 */}
    <button onClick={props.handleClick}>click me</button>
    
    {/* example 2 */}
    <p>Count: {props.count}</p>
    <button onClick={props.increment}>Increment</button>
    </>
  )
}

export default User