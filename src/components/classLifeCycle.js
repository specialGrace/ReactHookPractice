import React, { Component } from 'react'

export default class ClassLifeCycle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:''
      }
    }

    componentDidMount(){
        console.log('Component mounted')
        document.title =   `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
      
        if(prevState.count !== this.state.count){
            console.log('Component updated')
            console.log('prev',prevState.count)
            console.log('current',this.state.count)
            document.title =   `Clicked ${this.state.count} times`
        }
    }
    
  render() {
    return (
      <div>
         <input type='text' value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
         <button onClick={(e)=> this.setState({count:this.state.count + 1})}>Clicked {this.state.count} times</button>
      </div>
    )
  }
}
