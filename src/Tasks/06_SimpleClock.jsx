import { useEffect, useState } from "react"



const SimpleClock = () => {
    
    const date = new Date()
    const [newDate,setNewDate] = useState(date)
   
    const getDay = (date) => {
        const dateArr = ["sunday","monday","thuesday","thursaday","friday","saturday"]
        return dateArr[date.getDay()]
    }

    let day = getDay(newDate)

    const getDate = (date)=>{
        const month = date.toLocaleString('default',{month:'long'})
        const day = date.getDate()
        const year = date.getFullYear()

        return `${month} ${day} ${year}`
    }

useEffect(()=>{
  const timer =   setInterval(() => {
        setNewDate(new Date())
    }, 1000);

    return () => {
        clearInterval(timer)
    }
},[])
    
    return (
        <div>
            {day}
            <br />
            {getDate(newDate)}
            <br />
            {newDate.toLocaleTimeString()}
        </div>
    )
}

export default SimpleClock