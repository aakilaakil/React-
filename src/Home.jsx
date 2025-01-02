import React from 'react'
import './Home.css'
import './Akil.css'
import { useState, useEffect , useRef} from 'react';
import { use } from 'react';


function Home() {

  let refval=useRef(0);
  const [val,setval] = useState(0);


     const increment=()=>{                            // Increamnet Function
      setval(val+1);
      refval.current++;
     };

    const [name,setname] = useState("No Name")
     const changename=(event)=>{
      setname(event.target.value)
      console.warn("The Name Is Changed To : ",name);   
     }



  return (
    <div className='wel'>
    <h2>Slam Book Makes You Child💫</h2>
    <button onClick={increment}>Click For Love : {val}❤️</button>
    <div><label>Type Here:</label>

   <input onChange={changename} placeholder='Type Your Name'></input></div>

    <h3>Slam Book Welcomes You Mr.{name}</h3>
   <a href="https://www.bmw.in/en/all-models/7-series/sedan/2022/bmw-7-series-sedan-highlights.html">Click For Your Dream Car </a>
  </div>
  )
}

export default Home
