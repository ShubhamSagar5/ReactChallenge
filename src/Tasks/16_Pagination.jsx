import { useEffect } from "react"
import { useState } from "react"



const Pagination = () => {
    
    const [data,setData] = useState([])
    const [pageNu,setPageNum] = useState(1)

    const handleApiData = async() => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNu}`)
            const finalData = await res.json()
            setData(finalData)
            console.log(finalData)
            console.log(pageNu)
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleNext = () => {
        if(pageNu < 10){
            setPageNum((prev)=> prev+1)
        }else{
            setPageNum(1)
        }
    }

    const handlePrevious = () => {
        if(pageNu > 1){
            setPageNum((prev)=>{
                return  prev-1
                
            })
        }
    }

    useEffect(()=>{
        handleApiData()
    },[pageNu])

    
    return (
        <div>
            {
                data.map((item)=>{
                    return (
                        <div className="m-5 border text-left" key={item.id}>
                            <p className="font-bold">Title: {item.title}</p>
                            <p>Description: {item.body}</p>
                        </div>
                    )
                })
            }

            <div className="m-5 flex gap-2 justify-between">
               
                <button onClick={handlePrevious}>⬅Previous</button>
                <button onClick={handleNext}>Next➡</button>
            </div>
        </div>
    )
}

export default Pagination