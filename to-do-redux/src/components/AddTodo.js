import React from 'react'
import { connect } from 'react-redux'
import { addDefaultAction, addTodoAction, removeLastAction, removeTodoAction } from '../store'
import { Input, Button, Form } from 'reactstrap';

class AddTodo extends React.Component {
  state = {
    fields: {
      todoText: {
        name: "todoText",
        label: "Todo text",
        value: "",
        error: null,
        validator: (value = "") => {
          return value ? false : "Required";
        },
      },
    },
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    console.log('name', event.target);
    const currentField = this.state.fields[name];
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...currentField, value },
      },
    });
  };

  render() {
    console.log(this.props)
    const todoText = this.state.fields.todoText.value;
    return (
      <div>
        <Form onSubmit={e => {
          e.preventDefault();
          const todoText = this.state.fields.todoText.value;
          const { addTodo } = this.props;
          addTodo({ text: todoText });
        }}>
          <label for={this.state.fields.todoText.name}>Todo</label>
          <Input
            name={this.state.fields.todoText.name}
            id={this.state.fields.todoText.name}
            value={todoText}
            onChange={this.handleChange}
          />
          <Button
            type="submit"
            color="primary"
            disabled={this.props.todos.length > 9}
          >
            Add Todo
          </Button>
          <Button onClick={(e) => {
            e.preventDefault();
            this.props.removeLast()
          }}
            color="danger"
            disabled={this.props.todos.length < 1}>
            Remove Last
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              this.props.addDefault({ text: "default" })
            }}
            color="primary"
            disabled={this.props.todos.length > 9}
          >
            Add default
          </Button>
        </Form>

        <div className="todo-container">
          {this.props.todos.map((todo, index) =>
            <div className="todo">
              <span>{todo.text}</span>
              <span className="close-icon" onClick={() => {
                this.props.removeTodo(index)
              }}>❌</span>
            </div>)}
        </div>

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
  removeLast: removeLastAction,
  addDefault: addDefaultAction
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
