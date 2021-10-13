import React from "react";
import ToDo from "../ToDo"

class ToDoList extends React.Component {
    state = { counter: 0 };


    handleAddTask = (event) => {
        this.setState(({ counter }) => ({ counter: counter + 1 }))
    }
    handleRemoveTask = (event) => {
        this.setState(({ counter }) => ({ counter: counter - 1 }))
    }

    render() {
        const { counter } = this.state;
        return (
            <div className="field">
                No items
                <div>Counter: {counter}</div>
                <ToDo />
                <div>
                    <button onClick={this.handleAddTask}>Add</button>
                    <button style={{ marginLeft: "10px" }} onClick={this.handleRemoveTask}>Remove</button>
                </div>
            </div >
        )
    }
}

export default ToDoList;