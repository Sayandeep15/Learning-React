import React, { useState } from 'react'



function Form(props) {
  const [text, setText] = useState("");
//   const [copied, setCopied] = useState(false);

  const handleChange=(event)=>{
    setText(event.target.value)    
  }

  const upperCase=()=>{
    setText(text.toUpperCase())
  }
//   const handleCopy = () => {
//     navigator.clipboard.writeText(text)
//       .then(() => {
//         setCopied(true);
//         setTimeout(() => setCopied(false), 2000); // Reset after 2s
//       })
//       .catch((err) => {
//         console.error('Failed to copy:', err);
//       });
//   };

    return (
    <div className='bg-zinc-900 w-full h-screen overflow-x-hidden px-8 flex flex-col'>
        <h1 className='text-white text-4xl mx-auto'>{props.title}</h1>
        <div className="container w-[80%] bg-zinc-800 mx-auto flex flex-col px-16 py-8">
          {/* <div className="nav  px-2 w-full  flex flex-end">
            <button className='bg-blue-500 w-fit ml-auto p-2 rounded-mg text-white transition-all ease-out hover:bg-blue-600' onClick={handleCopy}>Copy</button>
          </div> */}
          <textarea style={{ fontWeight: isBold ? 'bold' : 'normal'}} placeholder='Enter Your Text..' className='upper-lower p-2 bg-white text-black' value={text} id="form" rows="10" onChange={handleChange}></textarea>
          <button className='bg-blue-500 w-fit mx-auto mt-4  p-2 rounded-4xl text-white transition-all ease-out hover:bg-blue-600' onClick={upperCase}>Upper Case</button>
        </div> 
        {/* {copied && <p className="text-green-600 mt-2">Copied to clipboard!</p>} */}
    </div>
  )
}

export default Form
