import React from "react"
class TodoItem extends React.Component {
    render() {
        return (
          <div>
            <li>
            <input type="checkbox" checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(this.props.todo.id)}/>
          </li>
          <button>Delete</button>
          </div>
        )
      }
    }
    export default TodoItem