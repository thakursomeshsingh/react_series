import { useState, Component} from 'react'
import './App.css'
import UserList from './UserList'


class App extends Component{
  constructor(){
    super();

    this.state={
      name: "somesh singh"
    };

}
  render(){
    
  return (
    <>
     <div className='App'>
      <h1>Props With Class</h1>
      
      {/* <UserList name="somesh" email="somesh@gmail.com"/> */}
      
      {/* example 2 */}

      <UserList name={this.state.name} email="somesh@gmail.com"/>
      <button onClick={()=>this.setState({name:"thakur"})}>Update Props</button>
      </div>
    </>
  )
}
}

export default App
