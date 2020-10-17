import React,{Component} from 'react'
export default class ToDoList extends Component{

    state={
        id:"",
        title:"",
        status:""
    };

    handleIdChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            id:event.target.value
        });

    };
    handleTitleChange=(event)=>{
        console.log(event.target.value)
        this.setState({
            title:event.target.value
        });

    };
    handleStatusChange=(event)=>{
        this.setState({
            status:event.target.value
        });
       // console.log(event.target.value)
    }
    addTodo=(todo)=>{
        this.setState({
            todos:[...this.state.todos,todo]
        })
    };
    handleToDoSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.title)
        console.log(this.state.id)

        this.props.onAdd({
            id:this.state.id,
            title:this.state.title,
            status:this.state.status
        });
        this.setState({
            id:'',
            title:'',
            status:''
        })
    }

    render(){
        return(
        <div>

            <h3>Todo</h3>
            <form onSubmit={this.handleToDoSubmit}>
                <input onChange={this.handleIdChange} type="text" placeholder="id"></input><br></br>
                <input onChange={this.handleTitleChange}  type="text" placeholder="name"></input><br></br>
                <select onChnage={this.handleStatusChange}>
                    <option value="pending">Pending</option>
                    <option value="done">Done</option>
                </select>
                <button > save</button>
            
                
            </form>



        </div>
        )
    }


}