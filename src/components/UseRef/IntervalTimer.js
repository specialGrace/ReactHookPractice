import React,{useState, useEffect, useRef} from 'react'

const IntervalTimer = () => {
    const [count, setCount] = useState(0)
  
    const intervalRef = useRef(null)
    
    useEffect(()=>{
        console.log('called onec')
           intervalRef.current  = setInterval(()=>{
            setCount((prev)=> prev + 1)
       }, 1000)
      
       return ()=>{
           clearInterval( intervalRef.current)
       }
    }, [])

    const clearIntervalHandler = ()=>{
        clearInterval( intervalRef.current)
    }

  return (
    <div>
        <h2>Timer - {count}</h2>
        <button onClick={clearIntervalHandler}>Clear Interval</button>
    </div>
  )
}

export default IntervalTimer