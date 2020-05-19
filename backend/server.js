
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
let Todo = require('./todo.model');
const todoRoutes = express.Router();
app.use(cors());
app.use(bodyParser.json());
app.use('/todos', todoRoutes);
mongoose.connect('mongodb://127.0.0.1:27017/todos', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
  console.log('MongoDB database connection established succesfully');
})
todoRoutes.route('/').get(function(req,res) {
  Todo.find(function(err, todos) {
    if(err) {
      console.log(err); // Send error.
    } else {
      res.json(todos); // send all todos as response in JSON
    }
  })
})
todoRoutes.route('/:id').get(function(req,res) {
  let id = req.params.id;
  Todo.findById(id, function(err, todo) {
    if(err) {
      console.log(err);
    } else {
      res.json(todo);
    }
  });
})
todoRoutes.route('/add').post(function(req,res) {
      let todo = new Todo(req.body);
      todo.save()
         .then(todo => {
           res.status(200).json({'todo': 'todo added Sucess!!!!'});
         })
         .catch(err => {
           res.status(400).send('added new todo failed');
         });
})
todoRoutes.route('/update/:id').post(function(req, res) {
    const id = req.params.id;
    // TODO ITEM FROM FRONT (REQ.BODY);
    // TODO ITEM FROM DATABASE (TODO)
    Todo.findById(id, function(err, todo) {
      if(!todo) {
        res.status(400).send("Data is not found");
      }
      else {
        todo.todo_description = req.body.todo_description;
        todo.todo_reponsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;
        todo.save().then(todo => {
          res.json('Todo Updated');
        }).catch(err => {
          res.status(400).send("Update not possible");
        })
      }
    })
})
app.listen("3000", function() {
  console.log("Server is listening on 3000");
})