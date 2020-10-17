import React, { useState } from 'react';
import firebase from './firebase';


function Form(){

    const[title,setTitle] = useState('');
    const handleOnChange=(e)=>{
        setTitle(e.target.value)
    };

    const CreateTodo=()=>{
        const todoRef= firebase.database().ref('react-crud');
        const todo = {
            title:'',
            complete:false,
        };
        todoRef.push(todo)
    };

  return(
    
    <div>
      <input type="text" onChange={handleOnChange} value={title}/>
      <button>Todo</button>
    </div>
  


  )

}
export default Form;