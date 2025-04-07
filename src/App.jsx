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
import EventHandle from './Tasks/07_EventHandling'
import SimpleTimer from './Tasks/08_SimpleTimer'
import CharacterCounter from './Tasks/09_CharacterCounter'
import HoverCounter from './Tasks/10_HoverCounter'
import RatingComponent from './Tasks/11_ RatingComponent'
import DistanceConverter from './Tasks/12_DistanceConverter'
import ColorPalettes from './Tasks/13_ColorPalettes'
import Accordian from './Tasks/14_Accordian'
import TabComponent from './Tasks/15_TabComponent'
import Pagination from './Tasks/16_Pagination'
import MultiplicationTable from './Tasks/17_MultiplicationTableGenerator'
import LocalStorage from './Tasks/18_LocalStorage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Counter/> */}
    {/* <ParagrapghToogle/> */}
    {/* <RandomNumberGenerate/> */}
    {/* <SimpleInterest/> */}
    {/* <SelectAllCheckbox/> */}
    {/* <SimpleClock/> */}
    {/* <EventHandle/> */}
    {/* <SimpleTimer/> */}
    {/* <CharacterCounter/> */}
    {/* <HoverCounter/> */}
    {/* <RatingComponent/> */}
    {/* <DistanceConverter/> */} 
    {/* <ColorPalettes/> */}
    {/* <Accordian/> */}
    {/* <TabComponent/> */}
    {/* <Pagination/> */}
    {/* <MultiplicationTable/> */}
    <LocalStorage/>
    </>
  )
}

export default App
