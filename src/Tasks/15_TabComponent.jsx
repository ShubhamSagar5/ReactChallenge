import { useState } from "react"



const TabComponent = () => {

    let perObj = {
        name:"hari",
        age:20
    }

    let addObj =   {
        road:"Nashik",
        houseNo:10
    }

    const [per,setPer] = useState(perObj)
    const [add,setAdd] = useState(addObj) 
    const [tabIndex,setTabIndex] = useState(0)

  

    return (
        <div>
            <button onClick={() => setTabIndex(0)}>Person</button>
            <button onClick={() => setTabIndex(1)}>Address</button> 
        {
            tabIndex === 0 ?  <div>
              <p>{per.name}</p>
              <p>{per.age}</p>
            </div> : <div>
              <p>{add.road}</p>
              <p>{add.houseNo}</p>
            </div>
        }
           

            

        </div>
    )




}

export default TabComponent