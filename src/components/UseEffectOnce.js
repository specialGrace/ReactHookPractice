import React,{useState, useEffect} from 'react'

function UseEffectOnce() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    useEffect(()=> {
        console.log('UseEffect Called')
        document.addEventListener('mousemove', mouseMoveHandler)
    }, [])

    const mouseMoveHandler = (e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }
  return (
    <div>
        UseEffectOnce
        <h2>Cordinate X - {X}</h2>
        <h2>Cordinate Y - {Y}</h2>
    </div>
  )
}

export default UseEffectOnce