import React, { Component } from 'react'
import Todoitem from './Todoitem'

export default class ToDolist extends Component {
    render() {
        const {items,cleatItem,handleDelete,handleEdit} = this.props
        return (

            <div>
               <ul className="list-group my-5">
                    <h3 className="text-capatalize text-center">Todo list</h3>
                    {
                    items.map(item=>{
                        return (
                            <Todoitem key={item.id} title={item.title}
                            handleDelete={()=>handleDelete(item.id)}
                            handleEdit={()=>handleEdit(item.id)}
                            />
                        )
                    })
                    }
                    
                    <button type="button"
                        className="btn btn-danger btn-block text-capatalize" onClick={cleatItem}>
                            clear
                       
                    </button>
               </ul>
            </div>
        )
    }
}
