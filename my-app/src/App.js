import React,{Component} from 'react';
import Todoinput from './components/Todoinput'
import Todolist from './components/Todolist'
import 'bootstrap/dist/css/bootstrap.min.css'
import uuid from 'uuid'
class App extends Component{
	state={
		items:[],
		id:uuid(),
		item:'',
		editItem:false
	}
	handleChange = (e) => {

		this.setState({
			item:e.target.value
		})
	}
	handleSubmit=(e)=>{
		e.preventDefault();
		if(this.state.item==''){
			return
		}

		const newItem = {
			id:this.state.id,
			title:this.state.item
		};
		console.log(newItem);
		const updateItems = [...this.state.items,newItem]
		this.setState({
			items:updateItems,
			item:'',
			id:uuid()
		})
	}
	cleatItem=()=>{
		this.setState({
			items:[]
		})
	}
	handleDelete=(id)=>{

		const filterItems = this.state.items.filter(item=>

			item.id !=id)
			this.setState({
				items:filterItems
			})
	}
	handleEdit=(id)=>{
		const filterItems = this.state.items.filter(item=>

			item.id !=id);
			const selectedItem= this.state.items.find(item=>item.id===id)
			console.log(selectedItem)
			this.setState({
				items:filterItems,
				item:selectedItem.title,
				editItem:true,
				id:id
			})
			
	}
	render(){ 
		return (
			<div className="container">
				<div className="row">
					<div className="col-10-mx-auto col-md-8 mt-4">
				
						Hello React
						
						<Todoinput 
							item={this.state.item}
						 	handleChange={this.handleChange}
							handleSubmit={this.handleSubmit}
							editItem={this.state.editItem}
						 />
						<Todolist
						items={this.state.items}
						cleatItem={this.cleatItem}
						handleDelete={this.handleDelete}
						handleEdit={this.handleEdit}
						/>
					</div>
				</div>
			</div>
		)
	}


}

export default App;