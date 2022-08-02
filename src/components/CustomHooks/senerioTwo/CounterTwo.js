import React,{useState} from 'react'
import useCounterHook from './useCounterHook'

const CounterTwo = () => {
    const [initialValue, setInitialValue] = useState(1)

    // custom hooks
    const [increment, decrement, reset, count] = useCounterHook(10,10)
  
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

export default CounterTwo