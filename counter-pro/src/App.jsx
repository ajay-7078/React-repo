import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { use } from 'react'

function App() {
 
 let [counter, setCounter] =  useState(15)

//let counter = 15
const addvalue = () => {
  
  
 //counter = counter + 1
 setCounter(counter + 1)
 console.log("cliked",counter);
}

const removeValue = () => {
  setCounter(counter - 1)
}
  return (
    <>
    <h1>chai aur react  </h1>
   <h2>counter value: {counter}</h2>
   <button 
   onClick={addvalue}>add value {counter}</button>
   <br />
   <button onClick={removeValue}>remove value {counter}</button>
   <p>footer{counter}</p>
    </>
  )
}

export default App
