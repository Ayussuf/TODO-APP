import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            todos: []
        }
    }
    componentDidMount(){
        axios.get('http://localhost:3000/todo')
        .then(response => {
            console.log("RESPONSE TODOS: ", response);
            this.setState({
                todos: resposnse.data
            })
        }).catch(function(error){
            console.log(error)
        })
    }
    render(){
        return(
            <div className="container">
                <p> Welcome to the Todo List omponent!</p>
           </div>    

          
        ); 
        
    }      
};


export default TodoList;