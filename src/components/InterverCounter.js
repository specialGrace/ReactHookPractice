import React, {useState}from 'react'
import { useEffect } from 'react'

function InterverCounter() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        console.log('mounted')
        const interval = setInterval(()=>{
            setCount(count + 1)
        }, 1000)
    
        return ()=>{
            clearInterval(interval)
        }
    }, [count])
  return (
    <div>
        InterverCounter
        <h2>Count: {count}</h2>
    </div>
  )
}

export default InterverCounter