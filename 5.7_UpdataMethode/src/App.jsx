import { useState } from 'react'
import './App.css'
import UpdateMethod from './UpdateMethod'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1>Fetch API Put (UPDATE) Method!</h1>

   <UpdateMethod />
   </>
  )
}

export default App
