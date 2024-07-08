import React, { Component } from 'react'

export default class RenderMethod extends Component {
  
   // example 3
   constructor(){
    super();
    this.state = {
        email: "somesh@gmail.com",      
                }
    }
    render() {
    // example 1,2
    // console.log("render method", this.props);
    
    // example 3
    console.log("somesh singh", this.state.email);    
    return (
      <div>
        {/* <h1>Render Method !! {this.state.email}</h1> */}
        
        {/* example 3 */}
        <h2>Render Method !! {this.state.email}</h2>
        <button onClick={() => this.setState({email:"singh@gmail.com"})}>Update State</button>
        </div>
    )
  }
}
