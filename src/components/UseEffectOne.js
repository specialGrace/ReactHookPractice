import React,{useState, useEffect} from 'react'

// write a counter function that dictate the update of the document title
//make of useState() to manage counter value
//make use of useEffect() to track change and update appproprietly

function UseEffectOne() {
  const [count, setCount] = useState(0)

  useEffect(()=> {
     console.log('effect called')
     document.title = `You clicked the button ${count} times`
  })
  return (
    <div>
      <button onClick={()=> setCount(count + 1)}>Update title</button>
    </div>
  )
}

export default UseEffectOne