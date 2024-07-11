import { useState } from 'react'
import React,{createRef} from 'react';
import './App.css'
import { Component } from 'react'

class App extends Component {

  constructor (){
    super();
    this.myInputRef = createRef();
  }

  // example 1
  // componentDidMount(){
  //   this.myInputRef.current.value = 'somesh singh';
  //   console.log(this.myInputRef.current.value);
  // }

  // example 2
  handleClick =()=> {
    this.myInputRef.current.focus();
    this.myInputRef.current.style.background = "green";
    this.myInputRef.current.style.color = "white";

    console.log(this.myInputRef.current.value);

  };
  render(){

    console.log(this.myInputRef);

  return (
   
   <div className="App">
    <h1>Ref in React</h1>

    {/* example 1 */}
    <input type="text" ref={this.myInputRef} />
    <button onClick={this.handleClick}>Focus Input</button>
   </div>
    )
  }

 
}

export default App
