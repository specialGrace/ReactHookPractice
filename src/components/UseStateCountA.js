import React,{useState} from 'react'

const  UseStateCountA = ()=> {
    const [count, setCount] = useState(0)

    const addOne = ()=>{
        setCount((prev)=> prev + 1)
    }

    const minusOne = ()=>{
        setCount((prev)=> prev - 1)
    }

    const incrementFive = ()=>{
       for(let i=0; i<5; i++){
         setCount((prev)=> prev + 1)
       }
    }
  return (
    <div>
        UseStateCountA
        count:{count}
        <button onClick={addOne}>click</button>
        <button onClick={minusOne}>click</button>
        <button onClick={incrementFive}>click</button>
    </div>
  )
}

export default UseStateCountA