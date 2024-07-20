import React from 'react';
import { MyContext, MyContextNew } from './App';

function Child2() {
  return (
    <div>
        <h2>Child2</h2>

        <MyContext.Consumer>
          {(sharedData) => {
            return (
              <MyContext>
                {
                  (sharedDataNew) =>{
                    return(
                      <p>{sharedData} = {sharedDataNew}</p>
                    )
                  }
                }
              </MyContext>
            )
          }}
        </MyContext.Consumer>

         
    </div>
  )
}

export default Child2