// import React from 'react';
// const Student  = (props) =>{
// return <h1>Hello World Again {props.name}!</h1>
// };
// export default Student;

import React,{Component} from 'react';
class Student extends Component{
  render(){
  return <h1>Hello, {this.props.name}</h1>
  }
}
export default Student