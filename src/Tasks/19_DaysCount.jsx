import { useState } from "react"

const DaysRemainig = () =>{
    
    const [selectDate,setSelectDate] = useState(null)
    const [result,setResult] = useState(null)

    const handleDays = () => {
        const currentDay = new Date().getDate()
        const selectDay = new Date(selectDate).getDate()
        console.log(currentDay,selectDay)
        let res = selectDay - currentDay 

        if(res > 0){
            setResult(res)
        }else{
            throw new Error("Please Select Future Date not previous ")
        }
        
    }
    return (
        <div>
            <div>
                <input type="date" name="" id="" onChange={(e)=>setSelectDate(e.target.value)}/>
            </div>
            <br />
            <br />
            <button onClick={handleDays}>Get Days</button> 
            <br />
            <br />
            <p>Days Remaing : {result} Days</p>
        </div>
    )
}

export default DaysRemainig