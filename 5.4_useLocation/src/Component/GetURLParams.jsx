import React from 'react'
import { useSearchParams } from 'react-router-dom'

function GetURLParams() {  
    // ex 1  get value from url
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("name"));
    console.log(searchParams.get("city"));
    console.log(searchParams.get("job"));

    
    const name =(searchParams.get("name"));
    const city =(searchParams.get("city"));
    const job =(searchParams.get("job"));

  return (
    <>
    <h1>Get URL Params</h1>
    <h3>Name is: {name}</h3>
    <h3>City is: {city}</h3>
    <h3>Job is: {job}</h3>

    <button onClick={()=>setSearchParams({name: "singh", city: "Aligarh"})}>Update URL Value</button>

    <input type="text" onChange={(e)=>setSearchParams({name: e.target.value})} placeholder='Set Name URL Params Value' />
    <input type="text" onChange={(e)=>setSearchParams({city: e.target.value})} placeholder='Set CITY URL Params Value' />
    <input type="text" onChange={(e)=>setSearchParams({job: e.target.value})} placeholder='Set JOB URL Params Value' />
    
    </>
  )
}

export default GetURLParams;