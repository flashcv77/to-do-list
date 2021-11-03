import React from 'react'
import { connect } from 'react-redux'
import { addTodoAction, removeLastAction, removeTodoAction } from '../store'

class AddTodo extends React.Component {
  state = {
    todoText: 'test'
  }

  handleChange = (event) => {
    const { value } = event.target
    this.setState({
      todoText: value,
    })
  }

  render() {
    console.log(this.props)
    const { todoText } = this.state;
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          const { todoText } = this.state;
          const { addTodo } = this.props;
          addTodo({ text: todoText });
        }}>
          <input
            value={todoText}
            onChange={this.handleChange}
          />
          <button type="submit">
            Add Todo
          </button>
          
        </form>

        <div className="todo-container">
          {this.props.todos.map((todo, index) =>
            <div className="todo">
              <span>{todo.text}</span>
              <span className="close-icon" onClick={() => { this.props.removeTodo(index) }}>❌</span>
            </div>)}
        </div>
        <button onClick={() => { this.props.removeLast() }
          }>Remove Last</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
})

const mapDispatchToProps = {
  addTodo: addTodoAction,
  removeTodo: removeTodoAction,
  removeLast: removeLastAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
