import { useState } from "react"



const RatingComponent = () => {
    const emojis = ["😍","😀","😐","🙁"]
    const [showFeedback,setShowFeedback] = useState(false)
    const [textFeedback,setTextFeedback] =useState("")
    const [emoji,setEmoji] = useState()

    const handleShowFeedBack = (index) => {
        setShowFeedback(!showFeedback)
        setEmoji(index)

    }

    const handleFeedbackSubmit = () => {
        setTextFeedback("")
        console.log("Feddback:  " + textFeedback)
        console.log("Emoji: " + emoji)
       
    }

    return (
        <div>
            {
                emojis.map((item,index)=>{
                    return (
                        <button className="m-2" onClick={()=>handleShowFeedBack(index)}>{item}</button>
                    )
                })
            }
            <br />
            <div className={`flex flex-col gap-4 ${!showFeedback ? "hidden":""}`}>
                            <textarea className="border rounded-sm px-2" onChange={(e)=>setTextFeedback(e.target.value)} rows={3} cols={40} name="" id="" value={textFeedback}></textarea>
                            <button onClick={handleFeedbackSubmit}>Sumbit Feedback</button>
            </div>
        </div>
    )
}

export default RatingComponent