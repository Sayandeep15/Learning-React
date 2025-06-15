import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Component/Nav";
//Context
import { contextName } from "./Context/Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>UseContext Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Nav count={count}/> */}

      <contextName.Provider value={{count, setCount}}>
        <h1>UseContext Hook</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <Nav/>
      </contextName.Provider>
    </>
  );
}

export default App;
