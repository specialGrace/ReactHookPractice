import {useState} from 'react'

const useCounterHook = (initialValue=0, value) => {
    const [count, setCount] = useState(initialValue)

    const increment = ()=>{
        setCount((prev)=> prev + value)
    }

    const decrement = ()=>{
        setCount((prev)=> prev - value)
    }
    const reset = ()=>{
        setCount(initialValue)
    }

    return [increment, decrement, reset, count]
}

export default useCounterHook