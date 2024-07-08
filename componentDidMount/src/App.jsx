import React, { useState } from 'react'
import './App.css'
import { Component } from 'react'

class App extends Component {

  // example 1
  constructor(){
    super();
    this.state={
      count:0
    };
    console.log("constructor called!!");
  }
 
  //  example 2
  incrementCount=  ()=>{
    this.setState((prevState)=>({
      count: prevState.count +1,
    }));
    
  } ; 
  // example 1
  componentDidMount(){
    console.log("component did mount!!");
  }
  
  render(){
    console.log("Render!!");

    return (
      <>
      <div className='App'>
      <h1>component did mount</h1>

      {/* example 2 */}
       <h2>Count:{this.state.count}</h2>
       <button onClick={this.incrementCount }>Increment</button>
      </div>
      </>
    )
  }

  
}

export default App
