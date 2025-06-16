import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Component/Nav";

function App() {
  const [count, setCount] = useState(0);

  const handleclk = () => {
    //console.log("hey");
    return count;
  };

  //Using callback
  const handlecallback= useCallback(()=>{
    return count;
  },[])  //here we can give dependecy like count in the [], then it will run when the count will change

  return (
    <>
      <h1>UseCallback Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Nav handleclk={handleclk} handlecallback={handlecallback} />
      </div>
    </>
  );
}

export default App;
