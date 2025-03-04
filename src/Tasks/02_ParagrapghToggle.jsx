import { useState } from "react"


const ParagrapghToogle = () => {
    
    const [visible,setVisible] = useState(true)

    const handlePara = (e) => {
        console.log(e)
        setVisible(!visible)
    }
    

    return (
        <div>
        {
            visible && <p>This is Paragraph</p> 
        }
            
            <br />
            <button onClick={(e)=>handlePara(e)}>Toggle Para</button>
        </div>
    )
}

export default ParagrapghToogle