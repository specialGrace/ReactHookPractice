import React,{useContext, Component} from 'react'
import { Consumer } from './ContextAPI'
import UserContext from './ContextAPI'


function ParentComponent() {
  return (
    <div>
        <CONTEXT_API_C />
    </div>
  )
}

class CONTEXT_API_C extends Component{
    static contextType = UserContext
    render(){
        console.log(this.context)
        const {user} = this.context
        return(
            <>
                <CONTEXT_API_D />
                <h2>class component context - {user.firstName}</h2>
            </>
        )
    }
}

const CONTEXT_API_D = ()=>{
             const user = useContext(Consumer)
    return(
        <>
            <CONTEXT_API_F />
           <h2>Component D - {user.user.lastName}</h2>
           <h2>Component D - {user.lists[0]}</h2>
        </>
    )
}
const CONTEXT_API_F = ()=>{
    return(
        <>
             <h2>Conponet F</h2>
            <Consumer>
                {
                   (value)=>{
                        return <div>
                            <h2>Context from component F - {value.user.firstName}</h2>
                            <h2>Context from component F - {value.user.lastName}</h2>
                            <h2>Context from component F - {value.user.email}</h2>
                            <p>Context from component F - {value.lists[0]}</p>
                        </div>
                   }
                }
            </Consumer>
        </>
    )
}

export default ParentComponent