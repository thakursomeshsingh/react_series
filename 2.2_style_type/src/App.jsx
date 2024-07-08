import React from 'react';
import './App.css'

// example 2
import './style.css'

// example 4
import Style from "./style.module.css";

// example 5
import "./style.scss"

function App() {
  
 const headline ={
  color: "#fff",
  backgroundColor: "blue",
 };

  return (
   <>
   <div className='App'>
    <h1>Styles type in React.</h1>

    {/* example 1 Inline css */}
    <h1 style={{
      color:"#fff",backgroundColor:"green"}}>Inline method</h1>
 
    {/* example 2 Normal css */}
      <h1 className='primary'>Normal css</h1>

    {/*example 3 css in js */}
    <h1 style={headline}>Css in js</h1>

    {/*example 4 css module */}
    <h1 className={Style.module}>CSS module method</h1>

    {/* example 5 Sass and  Scss */}
    <h1 className='primary-sass'>Sass and  <span>Scss</span> method</h1>
   </div>
   </>
  )
}

export default App
