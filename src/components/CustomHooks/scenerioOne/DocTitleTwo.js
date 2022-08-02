import React,{useState} from 'react'
import useCustomeHook from './useCustomeHook'

const DocTitleTwo= () => {
    const [count, setCount] = useState(0)

    //custom hook
    useCustomeHook(count)
  return (
    <div>
        <h2>Count - {count}</h2>
        <button onClick={()=> setCount(count + 1)}>click</button>
    </div>
  )
}

export default DocTitleTwo