import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Tasks/01_Counter'
import ParagrapghToogle from './Tasks/02_ParagrapghToggle'
import RandomNumberGenerate from './Tasks/03_RandomNumberGenerate'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter/> */}
    {/* <ParagrapghToogle/> */}
    <RandomNumberGenerate/>
    </>
  )
}

export default App
