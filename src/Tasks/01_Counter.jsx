import { useState } from "react"


const Counter = () => {
    
    const [count,setCount] = useState(0)
    
    const handleClick = () => {
        setCount(count+3)
 
    }

    return (
        <div>
            Counter : {count}
            <br />
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default Counter 