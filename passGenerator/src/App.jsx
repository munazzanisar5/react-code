import { useState , useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass= ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "/^[a-zA-Z0-9,.!?]*$/"

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed ])

  const copyPasswordToClipboard= useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,99)
    window.navigator.clipboard.writeText(password)
  },
  [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed , setPassword])

  return (
    <>
      
      <div  className='w-full max-w-md mx-auto shadow-md rounded-xl px-4 my-6 text-orange-500 bg-gray-700 py-4'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          pattern='password'
          readOnly
          ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
        </div>
        <div className='flex text-sm gap-x-2 '>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
             />
             <label>length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            className='cursor-pointer'
            onChange={()=>{setNumberAllowed((previousVal)=> !previousVal)}}
             />
             <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            className='cursor-pointer'
            onChange={()=>{setcharAllowed((prevVal)=> !prevVal)}}
             />
             <label>Character</label>
          </div>
        </div>
      </div>
     
      
    </>
  )
}

export default App
