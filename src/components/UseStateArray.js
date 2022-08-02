import React, {useState} from 'react'

const UseStateArray = () => {
    const [lists, setLists] = useState([])

     const addNumber = ()=>{
        console.log('we are here')
        setLists([...lists,{
            id:lists.length,
            value: Math.floor(Math.random() * 10 + 1)
        }])
     }

     console.log(lists)
  return (
    <div>
        <button onClick={addNumber}>Add number</button>
       <ul style={{display:'flex'}}>
        {
           lists.length > 0 && lists.map((list)=> <li key={list.id} style={{color:'blue'}}>{Number(list.value)}</li>)
        }
       </ul>
    </div>
  )
}

export default UseStateArray
