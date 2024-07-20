import React, { useReducer } from 'react'

// example 2 Reducer function
const reducer = (state, action)=>{
    console.log(state, action);

    switch (action.type) {
        case "Increment":
            return {count: state.count +1};
        case "Decrement":
            return {count: state.count - 1};
        
        default:
            return state; 
        }
};

function Counter() {

    // example 2
    const initialState ={count:0};
    const [state,dispatch]=useReducer(reducer, initialState);
  return (
    <>
    <p>Count: {state.count}</p>
    <button onClick={()=> dispatch({type: "Increment"})}>Increment Count</button>
    <button onClick={()=> dispatch({type: "Decrement"})}>Decrement Count</button>
    </>
  )
}

export default Counter