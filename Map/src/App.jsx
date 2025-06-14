import { useEffect, useState } from 'react'
import './App.css'
import { people } from '../public/data'
import { getImageUrl } from '../public/imgUrl'

function App() {

  const [input, setinput] = useState("")

  //MAP FUNCTION
  const personList= people.map(person=>
    <li key={person.id} className='flex items-center gap-4 m-2'>
      <img src={getImageUrl(person)} alt={person.name} className='rounded-full outline-none'/>
      <p>
        <b>{person.name}: </b>{" "+ person.profession+" "} known for {" "+ person.accomplishment+"."}
      </p>
    </li>
  )

  //FILTER FUNCTION
  const handleDisplay=async ()=>{
    const findPeople = people.filter(person =>
      person.profession=== input
    )
    const list= findPeople.map(person=>
      <li key={person.id} className='flex items-center gap-4 m-2'>
      <img src={getImageUrl(person)} alt={person.name} className='rounded-full outline-none'/>
      <p>
        <b>{person.name}</b>
      </p>
    </li>
    )
  }
  

  return (
    <>
      <article className='bg-black text-white'>
        <h1 className='text-2xl font-semibold'>Scientists:</h1>
        <ul>{personList}</ul>




        <div className="container ">
          <input type="text" name="inp" value={input} id="" onChange={(e)=>setinput(e.target.value)} className='bg-white text-black'/>
          <button className='bg-blue-500 rounded-md px-2 m-2' onClick={handleDisplay}>Display</button>
          
        </div>
      </article>
    </>
  )
}



export default App
