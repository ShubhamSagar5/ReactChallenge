import { useState } from "react"

const HoverCounter = () => {
    
    const [hoverCount,setHoverCounter] = useState(0)

    const handleCountHover = () => {
        setHoverCounter((prevValue)=>{
           return  prevValue + 1
        })
    }

    return (
        <div>
            <button onMouseOver={handleCountHover}>Hover on me</button>
            <p>Hover Counter : {hoverCount}</p>
        </div>
    )
}

export default HoverCounter