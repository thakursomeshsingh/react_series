import React, { Component } from 'react'

class UserList extends Component {
  render() {
    console.log(this.props);

    const {name, email}=this.props;  //destructured
   
    return (
      <div>
        <h1>UserList</h1>

        {/* <p>{this.props.name}</p>
        <p>{this.props.email}</p> */}

        <p>{name}</p>   //we can use like this after destructuring
        <p>{email}</p>
      </div>
    )
  }
}
 
export default UserList;