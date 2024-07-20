import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  // exampl 1
  const navigate = useNavigate();

  // example 2
  const handleDynamicNavigation = (targetRoute) => {
    navigate(targetRoute);
    console.log(targetRoute);
  };

  // example 3
  const handleConditionalNavigation = (shouldNavigate)=>{
    if(shouldNavigate){
     navigate("/about"); 
    }else{
      navigate("/service");
    }
  }

  return (
    <>
      <h1>Hello Home Page!</h1>

      {/* example 1 */}

      {/* <button onClick={() => navigate("/about")}>Go to About Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/service")}>Go to Service Page</button>
      <br />
      <br />
      <button onClick={() => navigate("/geturl")}>Go to URL params Page</button>
       */}

      {/* example 2 */}

      {/* <button onClick={() => handleDynamicNavigation("/about")}>Go to About Page</button>
      <br />
      <br />
      <button onClick={() => handleDynamicNavigation("/service")}>Go to Service Page</button>
      <br />
      <br />
      <button onClick={() => handleDynamicNavigation("/geturl")}>Go to URL params Page</button> */}
      
      {/* example 3 */}
      <button onClick={() => handleConditionalNavigation(true)}>Go to About Page</button>
      <br />
      <br />
      <button onClick={() => handleConditionalNavigation(false)}>Go to Service Page</button>
      <br />
      <br />
      // <button onClick={() => handleDynamicNavigation("/geturl")}>Go to URL params Page</button>
    </>
  );
}

export default Home;
