import React, { Component } from 'react'

export default class Unmount extends Component {
  
  componentDidMount(){
    this.intervalId = setInterval(()=>{
        console.log("interval tick");
    }, 1000);
  }

//example 2
componentWillUnmount(){
    clearInterval(this.intervalId);
    console.log("interval tick removed");
}
    render() {
    return (
      <div>
        <h2>child component will unmount</h2>
      </div>
    )
  }
}
