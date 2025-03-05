import { useState } from "react"


const SimpleInterest =  () => {
    
    const [amount,setAmount] = useState(null)
    const [rate,setRate] = useState(null)
    const [time,setTime] = useState(null)
    const [res,setRes] = useState(0)
    const [totalAmount,setTotalAmount] = useState(0)

    const handleInterest = () => {
        const res = (amount*rate*time)/100
        setRes(res)
        const totalAmount = res + amount 
        setTotalAmount(totalAmount)
    }

    
    return(
        <div>
            <label htmlFor="amount">Amount </label>
            <input type="number" name="amount" id="amount" value={amount} onChange={(e)=>setAmount(parseInt(e.target.value))} />
            <br />
            <br />
            <label htmlFor="rate">Rate </label>
            <input type="number" name="rate" id="rate" value={rate} onChange={(e)=>setRate(parseInt(e.target.value))} />
            <br />
            <br />
            <label htmlFor="time">Time </label>
            <input type="number" name="time" id="time" value={time} onChange={(e)=>setTime(parseInt(e.target.value))} />
            <br />
            <br />
            <button onClick={handleInterest}>Calculate</button>
            <br />
            <br />
            <div>
               Interest :  {res}
               <br />
               <br />

               TotalAmount : {totalAmount}
            </div>
        </div>
    )
}

export default SimpleInterest