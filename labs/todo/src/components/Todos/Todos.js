import React from 'react'
import TodoItem from "../Todoitem/Todoitem"

const Todos = props =>{
  const todoslist = props.todos.map((todo, index)=>(
    <TodoItem
      key={todo.id}
      id={todo.id}
      isComplete={todo.isComplete}
      text={todo.text}
      handleComplete={props.handleComplete}
      />
  ));
    return(
        <div className="todo-content">
          <ol>
        {todoslist}
          </ol>
        </div>
    )
};
export default Todos