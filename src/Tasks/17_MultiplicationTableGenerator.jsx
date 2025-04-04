import { useState } from "react"


const MultiplicationTable = () => {
    
    const [data,setData] = useState([])
    const [inputNumber,setInputNumber] = useState(0)
    
    const handleTable  = () => {
        try {
            
            setData([])

            if(inputNumber == 0){
            throw new Error("0 is not valid")
        }
        for(let i=1; i<=10; i++){
            setTimeout(()=>{
                setData((prev)=>{
                    return [...prev,inputNumber*i]
                })
            },1000 * i)
        }
        } catch (error) {
            console.log(error.message)
        } 

        console.log(data)
    }

    console.log(data)

    return (
        <div>
            <input type="number" onChange={(e)=>setInputNumber(e.target.value)} value={inputNumber} name="" id=""  placeholder="Enter the number "/>
            <button onClick={handleTable}>Generate Table</button>
            {
                data.map((val)=>{
                    return (
                        <div>
                            {val}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default MultiplicationTable