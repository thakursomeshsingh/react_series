import React, { useState } from 'react'

function FormHandling() {

    const[formData, setFormData] = useState({
        username:'',
        email:'',
        password:'',
        isSubscribed:'',
        role:''
    })

    const handleChange= (event) =>{
        const{name, value, type, checked} = event.target;

        const filedValue = type ==='checked' ? checked : value;

        setFormData({
            ...formData,
            [name]:filedValue
        });
     }

     const handleSubmit =(event)=>{
        event.preventDefault();
        console.log("form Data", formData);
     }
  return (
    <>
       <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="username">username:</label>
            <input 
            type="text"
            id="username"
            name='username'
            value={formData.username}
            onChange={handleChange} 
            />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input 
            type="email"
            id="email"
            name='email'
            value={formData.email}
            onChange={handleChange}  
            />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input 
            type="password"
            id="password"
            name='password'
            value={formData.password}
            onChange={handleChange}  
            />
        </div>
        <div>
            <label htmlFor="isSubscribe">Subscribe:</label>
            <input 
            type="checkbox"
            id="isSubscribe"
            name='isSubscribe'
            value={formData.isSubscribed}
            onChange={handleChange}  
            />
        </div>
        <div>
            <label htmlFor="role">Role:</label>
            <select 
            id='role'
            name="role"
            value={formData.role}
            onChange={handleChange} 
            >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
                <option value="guest">Guest</option>
            </select>
        </div>
        <button type='submit'>Submit</button>
       </form>
    </>
  )
}

export default FormHandling