import React,{useState, useEffect} from 'react'

function UseEffectCleanup() {
    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    // first argument to useEffcet is the equivalent of componentDidmount in class component
    //second argument to useEffect is the equivalent of componentDidUpdate in class component
    //the return callback function inside the useEffect is the equivalent of componentWillUnmount in class component. it is used for cancelling subscribed events
    useEffect(()=> {
        console.log('UseEffect Called')
        window.addEventListener('mousemove', mouseMoveHandler)

        // cleanups
        return ()=>{
           window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    const mouseMoveHandler = (e)=>{
        console.log('mousemove')
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

export default UseEffectCleanup