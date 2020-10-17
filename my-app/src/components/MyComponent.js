import React,{Component} from 'react'

class MyComponent extends Component{
    componentWillMount(){
        console.log('will mount')
    }
    componentDidlMount(){
        console.log('mounted')
    }
    render(){
        const {title,name,onClick}=this.props

        return(

            <div className="App">
                <h1>MyComponent</h1>
                Title:{title}
                Name:{name}
                <div onClick={onClick}>Click me</div>
            </div>
        )
    }
}

export default MyComponent;