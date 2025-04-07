import { useEffect, useState } from "react"


const LocalStorage = () => {
    
    let number = parseInt(localStorage.getItem("count",0)) || 0
    let [count,setCount] = useState(number)
    
    
    const handleIncrement = () => {
        setCount((prev)=>prev+1)
    }

    const handleDecrement = () => {
        setCount((prev)=>prev-1)
       
    }

    useEffect(()=>{
        localStorage.setItem("count",count)
    },[count])

    return (
        <div>
            <p  className="text-2xl">{count}</p>
            <br />
            <button className="p-2 m-2 border" onClick={handleIncrement}>+</button>
            <button className="p-2 m-2 border" onClick={handleDecrement}>-</button>
        </div>
    )
}

export default LocalStorage