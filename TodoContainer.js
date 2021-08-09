import React from "react"
import TodoList from "./TodoList";
import Header from "./Header";
import TodoItem from "./TodoItem";
class TodoContainer extends React.Component {
    state = {
        todos: [
          {
            id: 1,
            title: "React introduction",
            completed: true
          },
          {
            id: 2,
            title: "Single page application",
            completed: false
          },
          {
            id: 3,
            title: "React forms",
            completed: false
          }
        ]
       };
       handleChange = id => {
        this.setState(prevState => ({
          todos: prevState.todos.map(todo => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              }
            }
            return todo
          }),
        }))
      };
  render() {
    return (
        <div>
         
        <Header/>
        <ul>
      {this.state.todos.map(todo => (
        <li key={todo.id}>
          {todo.title}
        <TodoList todos={this.state.todos} handleChangeProps={this.handleChange} /></li>
      ))}
    </ul>
    
        </div>
    )
  }
}
export default TodoContainer