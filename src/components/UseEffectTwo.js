import React,{useState, useEffect} from 'react'

function UseEffectTwo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    // cause side effect - DOM manipulation
    useEffect(()=>{
        console.log('Component mounted')
        document.title =   `Clicked ${count} times`
    },[count]) // dependency variable that dictates when useEffect should be called again after the first time
  return (
    <div>
        UseEffectTwo
        <input 
            type='text' 
            value={name} 
            onChange={(e)=>setName(e.target.value)}/>
         <button 
         onClick={(e)=> setCount(count + 1)}
         >Clicked {count} times</button>
    </div>
  )
}

export default UseEffectTwo