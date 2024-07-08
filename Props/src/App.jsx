//  App.jsx


import React, { useState } from 'react'
import './App.css'
import UserCard from './UserCard'

function App() {
  // exapmle 3

  const [name, setCount] = useState("somesh");
 
  // example 2

  // const usersData = [
  //   {name: "john", age:20, email:"john@gmail.com"}
  //   {name: "wick", age:21, email:"wick@gmail.com"}
  //   {name: "hame", age:31, email:"hame@gmail.com"}
  // ];

  return (
    <>
     <div className='App'>
      <h1 className="content">props in react</h1>
     <UserCard name={name}/>

     {/* example 3 */}
     {/* <button onClick={() => setName("education")}>update props</button> */}
     
     {/* example 2 */}
     {/* {usersData.map((user, index)=>(
      <UserCard
      key={index}
      name={user.name}
      age={user.age}
      email={user.email}
      ))} */}
     </div>
    </>
  ); 
}

export default App
