import React from 'react'

function Profile() {

    // exapmle 1 
    const isLoggedIn = true;

    // example 2
        const items = ["Apple","banana","orange"];
  
    // example 3 
    const isAuthenticated = true;

return (
    <>

    {/* example 1 */}
        {isLoggedIn? <h2>Welcome user</h2> : <h2>Welcome Guest</h2>};
    
    {/* example 2 */}
    <div>
        {items.length> 0 ? (
          <ul>
            {
                items.map((item, index) => (
                    <li key={index}>{item}</li>
                )
            )}
          </ul>  
        ) : (
            <p> No items to display</p>
        )}
    </div>

    {/* example 3 */}
    <div>{isAuthenticated && (
        <button onClick={()=> console.log("Logged Out")}>Logout</button>
    )}</div>
    </>
  )
}

export default Profile