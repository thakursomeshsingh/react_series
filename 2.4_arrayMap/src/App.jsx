// import React from 'react'
import './App.css'

function App() {
  
  // example 1
  const names=["som","esh","singh"];

  // example 2
  const products =[
    {
      id:1,
      name:"somesh",
      price:10
    },
    {
      id:2,
      name:"singh",
      price:20
    }
  ]

  // example 3
  const fruits =["banana","Apple","guava"];
  const fruitsItem = fruits.map((fruit, index)=><li>{fruit}</li>);

  return (
   <>
   <div className='App'>
      <h1>Map method in Array</h1>

    {/* example 1 */}
    <ul>
      {names.map((name, index)=>(
        <li key={index}>{name}</li>
      ))}
    </ul>

    {/* example 2 */}
    <ul>
      {products.map((product)=>(
        <li>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>

    {/* example 3 */}
    <ul>{fruitsItem}</ul>
    </div>
    </>
  )
}

export default App
