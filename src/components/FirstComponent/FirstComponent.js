import React from "react";

export class FirstComponent extends React.Component {
    state = {
        todoList: [],
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
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event);
        let task = {
            value: ""
        }
        const { todoList, value } = this.state;
        task.value = this.state.fields.todoText.value;
        // console.log(task.value);

        this.setState({ todoList: [...todoList, task] });
        // console.log(this.state.todoText.value);

        // this.setState({
        //     value: ''
        // });
        // this.state.fields.todoText.value = ''; //??how to setState value = ''
    };

    handleRemove = () => {
        const { todoList, value } = this.state;
        todoList.pop();
        this.setState({ todoList: [...todoList] });
        // console.log('removed', todoList);
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        const currentField = this.state.fields[name];
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: { ...currentField, value },
            },
        });
        // console.log(currentField.value);
    };



    render() {
        const {
            todoList,
            fields: { todoText },
        } = this.state;
        let tasksCount = this.state.todoList.length;
        let inputLength = todoText.value.length;

        return (
            <>
                <div className="taskContainer">
                    {todoList.map((task, index) => (
                        <div className="task" key={index}>{task.value}</div>
                    ))}
                </div>

                <hr style={{ width: "100%" }} />
                <div>
                    <div>Todo Add Form</div>
                    <form onSubmit={this.handleSubmit}>
                        <label style={{ paddingRight: "20px" }} htmlFor="name">
                            {todoText.label}
                        </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={todoText.value}
                            name={todoText.name}
                            id={todoText.name}
                        />
                        {inputLength === 0 && <span> Field can't be empty</span>}
                        <button
                            type="button"
                            className="btn"
                            disabled={inputLength === 0 || tasksCount > 9}
                            style={{ marginLeft: "20px" }}
                            onClick={this.handleSubmit}
                        >
                            Add todo
                        </button>

                    </form>
                    <button
                        // type="button"
                        className="btn"
                        disabled={tasksCount === 0}
                        onClick={this.handleRemove}
                    >
                        Remove
                    </button>
                </div>
            </>
        );
    }
}

export default FirstComponent;
