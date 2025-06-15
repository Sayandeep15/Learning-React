// WITHOUT USEcONTEXT---------------
// import React from 'react'

// const Button = ({count}) => {
//   return (
//     <button>Click to increase: {count} </button>
//   )
// }

// 

// WITH USEcONTEXT---------------
import React from "react";
import { useContext } from "react";
import { contextName } from "../Context/Context";

const Button = () => {
  const value = useContext(contextName);
  return (
  <button onClick={() => value.setCount((count) => count + 1)}>Click to increase: {value.count} </button>
)
}
export default Button
