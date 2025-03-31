import { useState } from "react"



const Accordian = () => {
    
    const data = [
        {
          question: "What is the capital of France?",
          answer: "Paris"
        },
        {
          question: "Who wrote 'Hamlet'?",
          answer: "William Shakespeare"
        },
        {
          question: "What is the chemical symbol for water?",
          answer: "H2O"
        },
        {
          question: "How many continents are there on Earth?",
          answer: "Seven"
        },
        {
          question: "What is the largest planet in our solar system?",
          answer: "Jupiter"
        }
      ]
      
      const [selected,setSelected] = useState(null)

      const setAccordianIndex = (i) => {
        if(selected == i){
            return setSelected(null)
        }
        setSelected(i)
      }

    return (
        <div>
            {
                data.map((item,index)=>{
                    return (
                        <div className="m-4 border" onClick={()=>setAccordianIndex(index)}>
                            <span>{item.question}</span>
                            <span>
                                {selected == index ? "-" : "+"}
                            </span>
                            <div className={`p-2 font-bold ${selected == index ? "" : " hidden"}` }>
                                {item.answer}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordian