import React, {Component} from 'react';
import './App.css';
//components
import Todoheader from './components/Todoheader/Todoheader';
import Todoinput from './components/Todoinput/Todoinput'
import Todos from './components/Todos/Todos'

const TodoItem= ({text})=>(
  <li>{text}</li>
)

class App extends Component {
  constructor(props){
    super(props);
  this.state={
    todos:[], 
    newTodo: ""
  }; 
//this.handleSubmit = this.handleSubmit.bind(this);
//this.handleChange = this.handleChange.bind(this);
}

  handleChange=event=>{
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit=event=>{
    event.preventDefault();
    const todos = [...this.state.todos, {
      id: Date.now(),
      text: this.state.newTodo,
      isComplete: false
    }];
    this.setState({todos, newTodo: " "});
  }
  handeComplete = id => {
    this.setState(function(cloneOfState){
      let indexOfTodo = cloneOfState.todos.findIndex(todo => {
        return todo.id == id
      })
    
      let foundTodo = cloneOfState.todos[indexOfTodo]
      foundTodo.isComplete = !foundTodo.isComplete;
      return cloneOfState
    })

  }
  handleDelete = id => {
    Event.stopPropagation
     return{...cloneOfState, todos:newTodo}
  })
}
   
  render(){
    const todoslist = this.state.todos.map((todo, index)=>(
      <TodoItem key={index} text={todo}/>
    ));
    return(
      <div className="App">
         <Todoheader/>
       <Todoinput
       handleSubmit={this.handleSubmit()}
       onChange={this.handleChange()}
       newTodo={this.state.newTodo}
       />
        
      </div>
    )
  }
}

export default App;
