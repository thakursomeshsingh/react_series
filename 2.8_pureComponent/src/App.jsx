import React, { Component } from 'react';
import './App.css';
import ChildPureComponent from './ChildPureComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      // count: prevState.count + 1,
    }));
  };

  render() {
    console.log("Parent rendered!!");
    return (
      <div className="App">
        <h1>Pure Component </h1>
        <ChildPureComponent count={this.state.count} onIncrement={this.handleIncrement} />
      </div>
    );
  }
}

export default App;
