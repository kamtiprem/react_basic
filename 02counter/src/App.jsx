import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  //let counter =53;
  const addValue = ()=>{
    
    // counter = counter + 1
    setCounter(counter+1)
    // console.log("counter",counter)
  }
  const removeValue = () =>{
    if(counter >=1 ){
      counter = counter-1;
    }
    else{
      counter = counter;
    }
    setCounter(counter)
  }
  
  return (
    <>
    <h1>Chai aur react</h1>
    <h2>Counter value: {counter}</h2>
    <button
    onClick={addValue}
    >Add value</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value</button>
    </>
  )
}

export default App
