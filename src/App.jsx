import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Tasks/01_Counter'
import ParagrapghToogle from './Tasks/02_ParagrapghToggle'
import RandomNumberGenerate from './Tasks/03_RandomNumberGenerate'
import SimpleInterest from './Tasks/04_SimpleInterest'
import SelectAllCheckbox from './Tasks/05_SelectAllCheckboxes'
import SimpleClock from './Tasks/06_SimpleClock'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter/> */}
    {/* <ParagrapghToogle/> */}
    {/* <RandomNumberGenerate/> */}
    {/* <SimpleInterest/> */}
    {/* <SelectAllCheckbox/> */}
    <SimpleClock/>
    </>
  )
}

export default App
