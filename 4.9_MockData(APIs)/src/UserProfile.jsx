import React from 'react'
import{useParams} from "react-router-dom";


const userData = {      //data should be same
  users: [
    { id:1, name: "user 1"},
    { id:2, name: "user 2"},
    { id:3, name: "user 3"}
  ]
}
function UserProfile() {
    const {userId} = useParams();
    console.log(userId);
    const user = userData.users.find((user)=> user.id === parseInt(userId));
  return (
    <div>
      <h2>User Profile</h2>
        {user ? (<div>
            <h3>Name: {user.name}</h3>
            <p>ID: {user.id}</p>
        </div> 
        ): (
            <p>User Not Found</p>
        )}
     
    </div>
  )
}

export default UserProfile