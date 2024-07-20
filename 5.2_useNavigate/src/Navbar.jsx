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
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    {/* <a href="/about">About</a> */}
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    {/* <a href="/service">Service</a> */}
                    <NavLink to="/service">Service</NavLink>
                </li>
                <li>
                    <NavLink to="/geturl">GetURL Params</NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar

