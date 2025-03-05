import { useState } from "react";


const SelectAllCheckbox = () => {
    
    const animals = [
        { id: 1, label: "Dog", checked: false },
        { id: 2, label: "Cat", checked: false },
        { id: 3, label: "Cow", checked: false },
        { id: 4, label: "Horse", checked: false }
      ];
      
    
      const [res,setRes] = useState(animals)
      const [all,setAll] = useState(false)

      const handleSelectAll = () => {
        const updateCheckBox = res.map((item)=>{
            return(
                {
                    ...item,
                    checked:!item.checked
                }
            )
        })
        setRes(updateCheckBox)
      }

      const handleSingle = (id) => {
        const updateCheckBox = res.map((item)=> (
                item.id == id ? {...item,checked:!item.checked} : item
            )
        )
        setRes(updateCheckBox)
      }

    
    return (
        <div>
            {
                res.map((item)=>{
                    return (
                        <div key={item.id}>
                   
                            <input type="checkbox" name="" id={item.label} checked={item.checked} onClick={()=>handleSingle(item.id)}/>
                       
                            <label htmlFor={item.label}>{item.label}</label>
                      
                        
                            
                        </div>
                    )
                })
            }
            <button onClick={handleSelectAll}>{all ? "Deselect All":"Select All"}</button>
        </div>
    )
}

export default SelectAllCheckbox