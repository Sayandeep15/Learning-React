import React from "react";

const Nav = ({handleclk,handlecallback}) => {
  console.log("nav bar rendering");

  return (
    <>
    <div>Nav</div>
    <button onClick={()=>{handleclk()}}>Click me: {handleclk()} </button>
    <button onClick={()=>{handlecallback()}}>Click me 2: {handlecallback()} </button>
    </>
  )

};

export default Nav;
