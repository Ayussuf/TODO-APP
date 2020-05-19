import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CreateTodo from './component/create-todo';
import EditTodo from './component/edit-todo';
import TodoList from './component/todo-list';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";




class App extends Component {
  render (){
    return (
     <div className="container">
       <Router>
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
             <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
           </a>
           <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
           <div className="collpase navbar-collapse">
               <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Todo</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">Create Todo</Link>
                  </li>
               </ul>
           </div>
         </nav>
           <br/>
          <Route path="/" exact component={TodoList} />
         <Route path="/edit/:id" component={EditTodo} />
         <Route path="/create" component={CreateTodo} />
       </Router>
     </div>
    
    );
  }
};
  

export default App;
