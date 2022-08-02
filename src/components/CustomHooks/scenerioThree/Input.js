import React from 'react'
import useInput from './useInput'


const Input = () => {
   const [firstName, bindFirstName, resetFirstName] = useInput('')
   const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e)=>{
            e.preventDefault()
            alert(`your details are: firstName - ${firstName}, lastName - ${lastName}`)

            resetFirstName()
            resetLastName()
    }
  return (
    <div>
       <form onSubmit={submitHandler}>
            <div className='form-group'>
                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' {...bindFirstName}/>
            </div>
            
            <div className='form-group'>
                <label htmlFor="lastName">last Name</label>
                <input type="text" id='lastName' {...bindLastName}/>
            </div>

            <button type='submit'>Submit</button>
            {/* <input type='submit' value='submit'/> */}
        </form>
    </div>
  )
}

export default Input
