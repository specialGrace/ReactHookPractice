import React,{useRef, useEffect } from 'react'

const InputRef = () => {
      const firstNameRef = useRef('')
      const lastNameRef = useRef('')

      useEffect(()=> {
            firstNameRef.current.focus()
      },[])

       console.log('lastName',lastNameRef.current.value)
       console.log('firstName',firstNameRef.current.value)
  return (
    <div>
        <input type='text' name='firstname' ref={firstNameRef} />
        <input type='text' name='lastname'  ref={lastNameRef}/>
    </div>
  )
}

export default InputRef
