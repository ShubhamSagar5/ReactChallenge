const EventHandle = () => {
  
  const handleOuter = () => {
    console.log("outer Called")
  }
  const handleMiddle = (e) => {
    console.log("Middle Called")
    e.stopPropagation()
  }
  const handleInner = (e) => {
    console.log("Inner Called")
    e.stopPropagation()
  } 

  const handler = (e) => {
    let target = e.target
    console.log("Clicked",target.textContent)
  }

  return (
    <div>
      {/* <div className="border p-10 bg-amber-800" onClick={handleOuter}>
        Outer
        <div  className="border m-10 p-10 bg-amber-600" onClick={handleMiddle}>
          Middle
          <div  className="border m-10 p-10 bg-amber-400" onClick={handleInner}> Inner</div>
        </div>
      </div> */} 

        <ul onClick={(e)=>handler(e)}>
          <li>Item1</li>
          <li>Item2</li>
          <li>Item3</li>
        </ul>

    </div>
  );
};

export default EventHandle;
