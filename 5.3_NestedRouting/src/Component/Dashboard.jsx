import React from 'react'
import{Link, Outlet} from 'react-router-dom'
// import Profile from './Profile'
// import Setting from './Setting'

function Dashboard() {
  return (
    <>
    <h1> Welcome to Dashboard page!!</h1>

    <Link to="profile">Profile Page</Link>
    <br />
    <br />
    <Link to="setting">Setting Page</Link>

    <Outlet/>
    </>
  )
}

export default Dashboard