import { useState } from "react"


const RandomNumberGenerate = () => {
    
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(0)

    const [generateNumber,setGenerateNumber] = useState(0)
    
    const handleGenerateNumber = () => {
        
        let newStart = parseInt(start)
        let newEnd = parseInt(end)

        if(newStart > newEnd ){
            alert("please Provide valid Range")
            throw new Error("please Provide valid Range")
        }

        let res = Math.floor(Math.random() * (newEnd-newStart) + newStart)
     setGenerateNumber(res)
    }

    return (
        <div>
            <label htmlFor="startRange">Start Number </label>
            <input type="number" name="start" id="startRange" onChange={(e)=>setStart(e.target.value)} />
            <br />
            <br />
            <label htmlFor="endRange">End Number </label>
            <input type="number" name="end" id="endRange" onChange={(e)=>setEnd(e.target.value)} />
            <br />
            <br />
            <button onClick={handleGenerateNumber}>Generate Number</button>
            <br />
            <br />
            <div>
                {generateNumber}
            </div>
        </div>
    )
}

export default RandomNumberGenerate