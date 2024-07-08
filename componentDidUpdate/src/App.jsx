import React, { useState } from 'react'
import './App.css'
import { Component } from 'react'

class App extends Component {

  // example 1
  constructor(){
    super();
    this.state={
      count:0,
      name :"somesh",
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
  componentDidUpdate(prevProps, prevState){
    // console.log("componentDidUpdate called!!");

    console.log(prevState.count, this.state.count);

    if((this.state.count, prevState.count)){
      alert("working");
    console.log(
      "componentDidUpdate called",
      prevState.count,
      this.state.count,
      prevProps 
  ); 
 }

// if(this.state.count < 10){
//   this.setState({ count: this.state.count + 1});
// }
  }
  
  render(){
    console.log("Render!!");

    return (
      <>
      <div className='App'>
      <h1>component did Update </h1>
      <h2>{this.state.name}</h2>

      {/* example 2 */}
       {/* <button onClick={()=>this.setState({name:"singh"})}>Update</button> */}

       {/* example 3 */}
       <h2>Count:{this.state.count}</h2>
       <button onClick={()=>this.setState({count:this.state.count + 1})}>Update State</button>
      </div>
      </>
    )
  }

  
}

export default App
