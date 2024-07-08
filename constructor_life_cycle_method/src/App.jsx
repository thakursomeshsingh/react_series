import React,{ useState } from 'react'
import './App.css'
import { Component } from 'react'

class App extends Component {

  constructor(){
    super();
    console.log("constructor method");
  }

  render(){
    console.log("render method");
    return (
      <>
       <div className='App'>
        <h1>constructor lifr cycle method</h1>
        </div> 
      </>
    )
  }
  

 
}

export default App
