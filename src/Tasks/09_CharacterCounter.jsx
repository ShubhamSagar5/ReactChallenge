import { useEffect, useState } from "react"


const CharacterCounter = () => {
    
    const [charcr,setCharac] = useState("")
    const [count,setCount] = useState()

   const handleCharCount = () => {
    setCount(charcr.length)
   }
   useEffect(()=>{
    handleCharCount()
   },[charcr])

    return (
        <div>
            <input className="border  p-2 rounded-sm" type="text" name="character" id="" value={charcr} onChange={(e)=>setCharac(e.target.value)} placeholder="Enter Ther Character"/>
            <br />
            <br />
            <p>Count Of Character : {count}</p> 
        </div>
    )
}

export default CharacterCounter