import React, { Component } from 'react';
import './App.css';

// Components 
import TodoHeader from './components/todoHeader/TodoHeader'
import TodoInput from './components/todoInput/TodoInput'
import Todos from './components/todos/Todos'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: ''
    };
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();
    const todos = [...this.state.todos, {
      id: Date.now(),
      text: this.state.newTodo,
      isComplete: false
    }];
    this.setState({todos, newTodo: ''});
  }

  handleComplete = id => {
    this.setState(function(cloneOfState){
      let indexOfTodo = cloneOfState.todos.findIndex(todo => {
        return todo.id == id
      })
      
      let foundTodo = cloneOfState.todos[indexOfTodo]
      foundTodo.isComplete = !foundTodo.isComplete;
      return cloneOfState
    })
  }

  handleDelete = (id, event) => {
    event.stopPropagation()
    this.setState(cloneOfState => {
      // filter through current todos and return everything that is not equal 
      // to id
      let newTodos = cloneOfState.todos.filter(todo => {
        return todo.id != id
      })
      return {...cloneOfState, todos: newTodos}
    })
  }


  render(){

    return (
      <div className="App" id="container">
        <TodoHeader />
        <TodoInput 
          handleSubmit={this.handleSubmit} 
          handleChange={this.handleChange}
          newTodo={this.state.newTodo}
        />
        <Todos
          todos={this.state.todos}
          handleComplete={this.handleComplete}
          handleDelete={this.handleDelete}
        />
      </div>
    )
  }
}

export default App;
