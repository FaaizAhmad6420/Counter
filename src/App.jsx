import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }
  return (
    <>
      <h1>Counter App</h1>
      <h3>{count}</h3>
      <button onClick={increaseCount} >+</button>
      <button onClick={decreaseCount} >-</button>
    </>
  )
}

export default App
