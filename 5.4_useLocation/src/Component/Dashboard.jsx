import React from 'react'
import{Link, Outlet, useLocation} from 'react-router-dom';

function Dashboard() {

    // example 1
    const location = useLocation();
    console.log(location);
    console.log(location.pathname);
    console.log(location.state);
  return (
    <>
    <h1> Welcome to Dashboard page!!</h1>

    <Link to="profile" state={{name: "somesh Singh"}}>Profile Page</Link>
    <br />
    <br />
    <Link to="setting">Setting Page</Link>

    <Outlet/>
    </>
  )
}

export default Dashboard