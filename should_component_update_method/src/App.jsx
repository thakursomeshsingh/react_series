import React from 'react'
import './App.css'
import { Component } from 'react'

class App extends Component {

  constructor(){
    super();
    this.state = {
      count:0
    }

  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate!!", this.state.count);
    
    if(nextState.count < 5){
      return true;
    }
    return false;
  }

  render(){
    // console.log(this.props,this.state.count);
    return (
      <>
        <div className='App'>
          <h1>ShouldComponentUpdateMethod</h1>
          <h2>count: {this.state.count}</h2>

          <button onClick={()=> this.setState({count:this.state.count + 1})}>Update</button>
        </div>
      </>
    )
  }
  


}

export default App
