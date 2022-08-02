import React,{useState} from 'react'

function UseStateObject() {
    const [name, setName] = useState({
        firstName:'',
        lastName:''
    })
  return (
    <div>
        UseStateObject
        <input type='text' value={name.firstName} onChange={(e)=> setName({...name,firstName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={(e)=> setName({...name, lastName:e.target.value})}/>
      <h4>This is firstName - {name.firstName}</h4>
      <h4>This is lastName - {name.lastName}</h4>
     <h4>{JSON.stringify(name)}</h4>
    </div>
  )
}

export default UseStateObject