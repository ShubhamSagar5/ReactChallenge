import { useState } from "react"

const DistanceConverter  = () => {
    
    const distanceArray = 
        {   
            select:0,
            centimeters:1,
      
            inches:2.54,
            
        
           feet:30.48,
          

            kilometers:10000,
       
            miles:160934.4
        }
    

    const [from ,setFrom] = useState(null)
    const [to,setTo] = useState(null)
    const [inputNumber,setInputNumber] = useState(0)

    const [result,setResult] = useState(0)

    const handleResult = () => {
        let newNumber = parseFloat(inputNumber)
        let newFromValue = parseFloat(distanceArray[from])
        let newToValue = parseFloat(distanceArray[to])
        
        const baseUnit = inputNumber *newFromValue
        const result = baseUnit / newToValue 

        setResult(result.toFixed(2))
    }

    return (
        <div>
            <h2>Distance Converter</h2>
            <input type="number" name="" value={inputNumber} className="border m-2" id="" onChange={(e)=>setInputNumber(e.target.value)} />
            <br />
            <select name="" id="" onChange={(e)=>setFrom(e.target.value)}>
                 {
                    Object.keys(distanceArray).map((item)=>{
                        return (
                            <option value={item}>{item}</option>
                        )
                    })
                 }
            

            </select>
           <p>To</p> 
           <select name="" id="" onChange={(e)=>setTo(e.target.value)}>
           {
                    Object.keys(distanceArray).map((item)=>{
                        return (
                            <option value={item}>{item}</option>
                        )
                    })
                 }
            

            </select>

            <br />
            <br />

            <button onClick={handleResult}>Calculate</button>
            <p>{result}</p>
        </div>
    )
}

export default DistanceConverter