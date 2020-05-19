import React, {Component} from 'react';
import axios from 'axios';


class CreateTodo extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo_description: '',
            todo_priority: '',
            todo_responsible: '',
            todo_completed: false,
        }
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this)
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }
    onChangeTodoDescription(e){
        this.setState({
            todo_description: e.target.value
        })
    

    }
    onChangeTodoResponsible(e){
        this.setState({
            todo_responsible: e.target.value
        })
    

    }
    onSubmit(e){
        e.preventDefault();
        const newTodo = {
            todo_description: this.state.todo_description,
            todo_responsible: this.state.todo_responsible,
            todo_priority: this.state.todo_priority,
            todo_completed: this.state.todo_completed
        }
        axios.post('http://:3000/todos/add', newTodo)
        .then(res => {
            console.log("Response from Database: ", res);
        })
        this.setState({
            todo_description: '',
            todo_priority: '',
            todo_responsible: '',
            todo_completed: false,

        });
    }
    

    render(){
        return(
            <div className="container">
                <h3>Create New To Do</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input className="form-control" type="text" value={this.state.todo_description} onChange={this.onChangeTodoDescription}/>
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input  className="form-control" type="text" value={this.state.todo_responsible} onChange={this.onChangeTodoResponsible}/>
                    </div>
                    <div className="form-check-inline">
                        <input className="form-check-input" type="radio" name="priorityOption" id="priortyLow" value="Low" /> 
                        <label>Low</label>
                    </div> 
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="priorityOption" id="priortyLow" value="Low" /> 
                        <label>Medium</label>
                    </div> 
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="priorityOption" id="priortyLow" value="Low" /> 
                        <label>High</label>
                    </div> 
                    <div className="form-group">
                      <input  className="form-control" type="submit" value="Create Todo" />
                    </div>


                </form>
           </div>    

          
        ); 
        
    }      
};


export default CreateTodo;

