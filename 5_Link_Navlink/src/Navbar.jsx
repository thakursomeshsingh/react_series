import React from 'react'
import {Link, NavLink} from "react-router-dom";


function Navbar() {
  return (
    <div>
        <nav>
            <div>
                <h1>Logo</h1>
            </div>
            <ul>
                <li>
                    {/* <a href="/">Home</a> */}
                    <NavLink to="/"
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? "green" : "transparent"};
                    }}>
                    Home</NavLink>
                </li>
                <li>
                    {/* <a href="/about">About</a> */}
                    <NavLink to="/about"
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? "green" : "transparent"};
                    }}>
                    About</NavLink>
                </li>
                <li>
                    {/* <a href="/service">Service</a> */}
                    <NavLink to="/service"
                    style={({ isActive }) => {
                        return { backgroundColor: isActive ? "green" : "transparent", color: "red"};
                    }}>
                    Service</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar


// /* important */
// nav ul li a.active {   
//     font-weight: 800;
//     color: rgb(64, 180, 238);
//   }
