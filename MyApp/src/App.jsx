import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Component from './Component/component'

function App() {

  const [count, setCount] = useState(0) // State variable to keep track of the count
  function increase(){
    setCount(count+1)
  }

  useEffect(()=>{
    document.title = `Count is ${count}`;
    console.log({count}); // Update the document title whenever the count changes
  },[count])

  return (
    <div>
      <h1>Hello World</h1>
      <Component />
      <button onClick={increase}>
        Count= {count}
      </button>
    </div>
   )
}

export default App
