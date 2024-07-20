import React, { useState } from 'react';
import './App.css';

function App() {

  // HoC
  const withCounter = (WrappedComponent) => {
    return function WithCounter(props) {
      const [count, setCount] = useState(0);
      const increment = () => {
        setCount(count + 1);
      };

      return (
        <WrappedComponent {...props} count={count} increment={increment} />
      );
    };
  };

  // Functional Component
  const Counter = ({ count, increment }) => {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
      </div>
    );
  };

  // Wrap Counter Component with the WithCounter HoC
  const CounterWithEnhancement = withCounter(Counter);

  return (
    <>
      <div className="App">
        <h1>HoC</h1>

        {/* example 1 */}
        {/* <h2>count: {count}</h2>
        <button onClick={()=>setCount(count+1)}>count+</button> */}

        {/* example 2 */}
        <CounterWithEnhancement />
      </div>
    </>
  );
}

export default App;
