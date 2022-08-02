import React, {useState} from 'react'
import UseEffectCleanup from './UseEffectCleanup'

function Logic() {
    const [display, setDisplay] = useState(true)
  return (
    <div>
        <button onClick={()=> setDisplay((prev)=> !prev)}>Toggle Display state</button>
        {display && <UseEffectCleanup />}
    </div>
  )
}

export default Logic