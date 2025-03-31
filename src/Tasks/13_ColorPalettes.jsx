import { useEffect, useRef, useState } from "react"



const ColorPalettes = () => {
    
    const [color,setColor] = useState([]) 
    const [saveColor,setSavedColor] = useState([])
    const [showSavedColor,setShowSavedColor]  = useState(false)
   
    const [id,setId] = useState(1)

    const colorGenerater = () => {
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
       
        setColor((prev)=>{
            return (
                [...prev,{red:red,green:green,blue:blue}]
            )
        }) 

  
    
        

    }


    const nextColorPalette = () => {
        setColor([])
        for(let i = 0; i<5; i++){
            colorGenerater()
        }
    }

    const saveColorPalette = () => {
        setSavedColor((prev)=>{
            return (
            [...prev,{id:id,...color}]
            )
        })
        setId((prev)=>prev+1)
    }

    const showSavedColorPalette = () => {
        setShowSavedColor(!showSavedColor)
    }

    const handleDeleteColor = (id) => {
        const newData = saveColor.filter((item)=>{
            return item.id != id
        })
        setSavedColor(newData)
    }

    useEffect(()=>{
            for(let i = 0; i<5; i++){
                colorGenerater()
            }
    },[])

   console.log(saveColor)

    return (
        <div >
           <div className="flex">

            {
                color.map((color,index)=>{
                    return (
                        <div className="border h-50 " style={{backgroundColor:`rgb(${color.red},${color.green},${color.blue})`}}>Color Name</div>
                    )
                })
            }
</div>
            <button className="mt-2" onClick={nextColorPalette}>Next</button>
            <button className="mt-2 ml-2" onClick={saveColorPalette}>save</button>
            <button className="mt-2 ml-2" onClick={showSavedColorPalette}>Show Saved Color Palatte</button>
       {
        showSavedColor && <div>
            {
                saveColor.map((item,index)=>{
                    console.log(item)
                    return (
                       <div className="border mt-2 flex ">
                        <div className=" h-40 w-22" style={{backgroundColor:`rgb(${item[0].red},${item[0].green},${item[0].blue})`}}></div>
                        <div className=" h-40 w-22" style={{backgroundColor:`rgb(${item[1].red},${item[1].green},${item[1].blue})`}}></div>
                        <div className=" h-40 w-22" style={{backgroundColor:`rgb(${item[2].red},${item[2].green},${item[2].blue})`}}></div>
                        <div className=" h-40 w-22" style={{backgroundColor:`rgb(${item[3].red},${item[3].green},${item[3].blue})`}}></div>
                        <div className=" h-40 w-22" style={{backgroundColor:`rgb(${item[4].red},${item[4].green},${item[4].blue})`}}></div>
                        <button onClick={()=>handleDeleteColor(item.id)}>Delete</button>
                       </div>
                    )
                })
            }
        </div>
       }
        </div>
    )
} 

export default ColorPalettes