import { useState } from "react";


function App() {
 
  // let counter = 15;

  const [counter, setCounter] = useState(15)

  const addValue = ()=>{
    console.log("Value Added ", counter+1, Math.random());
    
    setCounter((preCounter => preCounter+1))
    // setCounter((preCounter => preCounter+1))
    // setCounter((preCounter => preCounter+1))
    // setCounter((preCounter => preCounter+1))


    if(counter+1>20){
      console.log("stop");
            
    }
  }
  const removeValue = ()=>{
    
    setCounter(counter-1)
    if(counter<0){
      console.log("stop");      
    }
    console.log("Value Added ", counter, Math.random());
  }
  return (
    <>      
      <h1 className="bg-red text-[#FFFFFF] ">Vite and React | Munazza Nisar</h1>
      <h2>Counter Value  {counter}</h2>
      <button onClick={counter < 20 ? addValue : null}>Add VAlue</button>
      <br />
      <button onClick={counter > 0 ? removeValue : null}>Remove value</button>
      
    </>
  )
}

export default App
