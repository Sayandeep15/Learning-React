import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // First case
  useEffect(()=>{
    return ()=>{
      alert("Run when the page will render")
    }
  },[])

  // Second case
  useEffect(()=>{
    return ()=>{
      alert("Run when the specific state will change, for ex:'count'")
    }
  },[count])

  // Third case
  useEffect(()=>{
    alert("Run in every render")
  },[])

  return (
    <>
      
      <h1>Learning UseEffect Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>
     
    </>
  )
}

export default App
