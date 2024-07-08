import React,{Component} from 'react'
import './App.css'
import Unmount from './Unmount'

class App extends Component {

  constructor(){
    super();
    this.state={
      show:true
    }
  }
  render(){
 console.log("clicked", this.state.show);
    return (
      <>
      <h1>lifecycle method</h1>
      {this.state.show ? <Unmount/> : <h2>Removed</h2>}

{/* example 2 */}
      <button onClick={()=> this.setState({show: !this.state.show})}>removed component</button>
      </>
    )
  }
  


}

export default App
