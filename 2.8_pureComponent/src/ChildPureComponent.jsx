import React, { PureComponent } from 'react';

class ChildPureComponent extends PureComponent {
  render() {
    console.log("Child rendered!!");
    return (
      <div>
        <p>Count: {this.props.count}</p>
        <button onClick={this.props.onIncrement}>Increment</button>
      </div>
    );
  }
}

export default ChildPureComponent;
