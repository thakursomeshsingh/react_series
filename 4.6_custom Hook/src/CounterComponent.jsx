import React from 'react'
import useComponent from './useComponent'

function CounterComponent() {

    const {count, increment, decrement} = useComponent();

    console.log(useComponent);
  return (
    <>
    <p>Count: {count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
  
    </>
    )
}

export default CounterComponent