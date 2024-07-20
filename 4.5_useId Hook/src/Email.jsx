import { useId } from 'preact/hooks'
import React from 'react'

function Email() {
    // const id = Math.random();

    const id = useId(); 
  return (
    <div>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="text" id ={`${id}-email`} autoComplete='off' />
       
       <br />
       <br />
        <label htmlFor={`${id}-name`}>Name</label>
        <input type="text" id ={`${id}-name`} autoComplete='off' />
    </div>
  )
}

export default Email 