import React from "react";
import Task from "../Task"
import './ToDoList.css';

class ToDoList extends React.Component {

    state = {
        tasks: []
    };

    addTask = (task) => {
        let tasksArray = [...this.state.tasks];
        tasksArray.push(task);
        this.setState({ tasks: tasksArray });
    };

    removeTask = () => {
        let tasksArray = [...this.state.tasks];
        tasksArray.pop();
        this.setState({ tasks: tasksArray });
    }

    render() {
        let tasksCount = this.state.tasks.length;
        return (
            <div className="wrapper">
                <div className="taskContainer">
                    {tasksCount === 0 && <div className="warning">No Items</div>}
                    {tasksCount > 0 && this.state.tasks.map((item, index) => <Task key={index}></Task>)}
                </div>
                <button
                    className="btn"
                    disabled={tasksCount > 9}
                    onClick={this.addTask}
                >
                    Add
                </button>
                <button
                    className="btn"
                    disabled={tasksCount === 0}
                    onClick={this.removeTask}
                >
                    Remove
                </button>
            </div >
        )
    }
}

export default ToDoList;