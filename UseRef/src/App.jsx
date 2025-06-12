import { useState, useEffect, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const renderCount= useRef(0)
  const btnref= useRef()

  let normalVariable=0

  useEffect(()=>{
    renderCount.current+=1
    normalVariable+=1

    btnref.current.style.backgroundColor="red" //it can also use to target element without dom manipulation
  },[count])



  return (
    <>
      <h1>Learning UseRef Hook</h1>
      <p className="description">
        The useRef hook in React is a built-in hook that provides a way to
        persist values across renders without causing re-renders. It's commonly
        used to access DOM elements directly or to store mutable values like
        timers, previous state values, etc.
      </p>

      <div className="variable">
        <h3>Normal variable: {normalVariable}</h3>
        <h3>Refference variable: { renderCount.current}</h3>
      </div>
      
      <div className="card">
        <button ref={btnref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      
    </>
  );
}

export default App;
