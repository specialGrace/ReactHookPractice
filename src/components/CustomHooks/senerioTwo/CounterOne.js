import React,{useState} from 'react'
import useCounterHook from './useCounterHook'

const CounterOne = () => {
    const [initialValue, setInitialValue] = useState(1)

    const [increment, decrement, reset, count] = useCounterHook(0,1)
  
  return (
    <div>
        <p>count - {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>

        <input type='number' value={initialValue} onChange={(e)=> setInitialValue(Number(e.target.value))}/>
    </div>
  )
}

export default CounterOne