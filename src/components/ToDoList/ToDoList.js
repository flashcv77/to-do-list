import React from "react";
import ToDo from "../ToDo"
import './ToDoList.css';

class ToDoList extends React.Component {

    state = {
        tasks: []
    };

    addTask = (task) => {
        let arr = this.state.tasks;
        arr.push(task);
        this.setState({ tasks: arr });
    };

    removeTask = () => {
        let arr = this.state.tasks;
        arr.pop();
        this.setState({ tasks: arr });
    }

    render() {
        let tasksCount = this.state.tasks.length;
        return (
            <div className="field">
                <div className="taskContainer">
                    {tasksCount < 1 && <h2>No Items</h2>}
                    {this.state.tasks.map(() => {
                        return <div className="task">ToDo</div >
                    })}
                    {/* {this.state.tasks.map(() => <ToDo />)} */}
                </div>
                <button disabled={tasksCount > 9} onClick={this.addTask}>Add</button>
                <button disabled={tasksCount < 1} onClick={this.removeTask}>Remove</button>


            </div >
        )
    }
}

export default ToDoList;