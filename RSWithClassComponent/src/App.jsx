import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


class App extends Component {
  constructor(){
    super();
    this.state={
      data:"code4education",
    };
  }

  demo(){
    alert("class component");
// for=> change data value/ update
    // this.setState({
    //   data:"somesh",
    // });                 
  }

  render(){
  //  console.log(this.state.data);
  return (
    <>
     <div className="App">
      <h1>{this.state.data}</h1>

      <button onClick={()=>this.demo()}>Button</button>
      </div>  
    </>
  )
}
}

export default App
