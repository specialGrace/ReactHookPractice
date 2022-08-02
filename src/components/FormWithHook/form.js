import React, {useState, useEffect} from 'react'

const Form = () => {
    const initialValue = {
        letters:{
            firstThreeLetters:'',
            lastThreeLetters:'',
        },
        name:'',
        email:'',
        age:'',
        password:'',
        file:'',
        stack:{
            react:false,
            javascript:false,
            node:false
        },
        courses:'',
        gender:false,
    }
    const [formData, setFormData]  = useState(initialValue)
    // useEffect(()=>{
    //    console.log(formData)
    // },[formData])
   

    const changeHandler = (e) =>{
        const {name, value, type,checked,files} = e.target
        // console.log('change', name, value, checked, files)

            // type of checkboc
        if(type === 'checkbox'){
            console.log('checkbox', e.target.checked)
            setFormData({
                ...formData, stack:{...formData.stack, [name]:checked}
            })
        }

        if(name === 'letters'){
            console.log('select', e.target.id)
            // setFormData({
            //     ...formData, stack:{...formData.stack, [name]:checked}
            // })
        }

            // type of flie
        if(type === 'file'){
            setFormData({
                ...formData,  [name]: files[0]}
            )
        }

        // default
        setFormData({
            ...formData, [name]:value
        })
 }

 console.log('state',formData)

    const submitHandler = (e) =>{
    console.log('submit')
    }

    const selectOptions = [
        {
            label:'--select--',
            value:''
        },
        {
            label:'Maths',
            value:'maths'
        },
        {
            label:'English',
            value:'english'
        },
        {
            label:'French',
            value:'french'
        },
    ]
    const options = selectOptions.map(({label,value})=> (<option key={label} value={value}>{label}</option>))
  
  const {name, password, email, age, file, courses, stack,gender} = formData
    return (
    <div>
        <form>
            <input 
                type='text' 
                name='name'
                value={name} 
                placeholder='name'
                onChange={changeHandler} 
            />
            <input 
                type='number' 
                name='age'
                value={age} 
                placeholder='age'
                onChange={changeHandler} 
            />
              <input 
                type='email' 
                name='email'
                value={email} 
                placeholder='email'
                onChange={changeHandler} 
            />
              <input 
                type='password' 
                name='password'
                value={password} 
                placeholder='password'
                onChange={changeHandler} 
            />
            <div>
                <input 
                    type='checkbox' 
                    name='react'
                    placeholder='react'
                    onChange={changeHandler} 
                    // checked={formData.stack.node}
                />
                <input 
                type='checkbox' 
                name='javascript'
                placeholder='javascript'
                onChange={changeHandler} 
                // checked={formData.stack.react}
            />
            <input 
                type='checkbox' 
                name='node'
                placeholder='node'
                onChange={changeHandler} 
                // checked={formData.stack.javascript}
            />
            </div>

            <input 
                type='file' 
                name='file'
                value={file} 
                placeholder='file'
                onChange={changeHandler} 
            />

            <div>
            <input 
                type='radio' 
                name='gender'
                value='male' 
                checked={gender === 'male'}
                onChange={changeHandler} 
            />
            <input 
                type='radio' 
                name='gender'
                value='female' 
                checked={gender === 'female'}
                onChange={changeHandler} 
            />
            <input 
                type='radio' 
                name='gender'
                value='others'
                onChange={changeHandler} 
                checked={gender === 'others'}
            />
            </div>

            <div>
            <label htmlFor="courses">Courses</label>
            <select id='courses' name='courses' value={courses}  onChange={changeHandler} >
              {options}
            </select>

            <div>
                {/* select groups */}
                <label htmlFor='letters'>Choose Letters</label>
            <select name='letters' id='letters' onChange={changeHandler}>
                <optgroup label='First Three Letters'>
                        <option value='A'>A</option>
                        <option value='B'>B</option>
                        <option value='C'>C</option>
                </optgroup>
                <optgroup label='Last Three Letters'>
                    <option value='X'>X</option>
                        <option value='Y'>Y</option>
                    <option value='Z'>Z</option>
                </optgroup>
            </select>
            </div>
            </div>
            <button onClick={submitHandler}>Submit</button>
        </form>
    </div>
  )
}

export default Form