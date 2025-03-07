import { useRef, useState } from "react"


const SimpleTimer = () => {
    
    const [time,setTime] = useState(0)
    const [btnDisabled,setBtnDisabled] = useState(false)
    const [inputTime,setInputTime] = useState(0)

    let timer = useRef(null)

    const handleStart = () => {
        setBtnDisabled(true)
        timer.current = setInterval(() => {
                console.log("it will called")
                setTime((prevValue)=>{
                    if(prevValue < inputTime){
                        return parseInt(prevValue)+1
                    }else{
                        clearInterval(timer.current)
                        timer.current = null
                        return prevValue
                    }
                })
                
            }, 1000);
       

    }

    const handleStop = () => {
        setBtnDisabled(false)
        clearInterval(timer.current)
        timer.current = null
        
    }

    return (
        <div>
            <input type="number" value={inputTime} onChange={(e)=>setInputTime(e.target.value)} name="" id="" placeholder="Second" className="border border-white p-2 rounded-md"/>
            <br />
            <br />
            <button disabled={btnDisabled}  onClick={handleStart}>Start</button>
            <button disabled={!btnDisabled} className="ml-3" onClick={handleStop}>Stop</button>
            <br />
            <br />
            {time}
        </div>
    )
}

export default SimpleTimer