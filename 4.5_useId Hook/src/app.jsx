import { useState } from 'preact/hooks'
import './app.css'
import Email from './Email'

export function App() {

  return (
    <>
    <h1>useId Hooks in React</h1>

    {/* example 1 */}
    <Email/>

    <article>The article appeared on the front page of the Guardian</article>
    
    <Email />
    </>
  )
}
