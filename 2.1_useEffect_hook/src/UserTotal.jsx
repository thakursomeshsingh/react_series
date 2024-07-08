import React from 'react'
import { useEffect } from 'react'

function UserTotal(props) {

    useEffect(()=>{
        console.log("called with props");
    });

    useEffect(()=>{
        console.log("count is", props.count);
    },[props.count, props.total]);

  return (
    <>
    <div>
        <h2>Count: {props.count}</h2>
        <h2>Total: {props.total}</h2>
    </div>
    </>
  )
}

export default UserTotal