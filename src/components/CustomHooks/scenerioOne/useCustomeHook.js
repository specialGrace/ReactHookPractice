import {useEffect} from 'react'

const useCustomeHook = (count) => {
    useEffect(()=> {
        console.log('called')
        document.title = `count - ${count}`
    }, [count])
}

export default useCustomeHook