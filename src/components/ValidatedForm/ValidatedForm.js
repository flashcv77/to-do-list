import React from "react";
import Button from "../Button";
import "./ValidatedForm.css"


class ValidatedForm extends React.Component {
    state = {
        fields: {
            inputName: {
                name: "inputName", //fields.inputName , <label for="name"></label>
                label: "Name", //<label> ... </label>
                value: "", // |_value_______| <- input
                error: '',
                validator: (value = "") => {
                    return value.length > 7 ? false : "Name should be at least 6 symbols";
                },
            },
            email: {
                name: "email",
                label: "email",
                value: "",
                error: null,
                validator: (value = "") => {
                    return value ? false : "Required";
                },
            },
            password: {
                name: "password",
                label: "password",
                value: "",
                error: null,
                validator: (value = "") => {
                    return value ? false : "Required";
                },
            },
            confirmPassword: {
                name: "confirmPassword",
                label: "confirm password",
                value: "",
                error: null,
                validator: (value = "") => {
                    return value ? false : "Required";
                },
            },
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;   
        const currentField = this.state.fields[name];
        const error = currentField.validator(value);
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: { ...currentField, value, error },
            },
        });

    };

    handleReset = () => {
        console.log('check');
        this.setState({
            fields: {
                ...this.state.fields,
                inputName: {
                    ...this.state.fields.inputName, value: '',
                },
                email: {
                    ...this.state.fields.email, value: '',
                },
                password: {
                    ...this.state.fields.password, value: '',
                },
                confirmPassword: {
                    ...this.state.fields.confirmPassword, value: '',
                },

            }

        });
        console.log(this.state);
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const { fields } = this.state;
        console.log("name: " + fields.inputName.value);
        console.log("email: " + fields.email.value)
        console.log("password: " + fields.password.value)
        console.log("confirmed password: " + fields.confirmPassword.value)
        // let value1 = this.state.fields.inputName.value;
        // console.log(value1);
        // console.log(name, label, value);
        //     this.setState({
        //         value: value,
        //     });
        this.handleReset();
    };

    render() {
        const { fields } = this.state;
        let arr = Object.entries(this.state);
        console.log(arr);
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor={fields.inputName.name}>{fields.inputName.label}</label>
                    <input
                        value={fields.inputName.value}
                        onChange={this.handleChange}
                        name={fields.inputName.name}
                        id={fields.inputName.name}
                    />
                    <div className="error"> {fields.inputName.error && <span>{fields.inputName.error}</span>}</div>
                    <label htmlFor={fields.email.name}>{fields.email.label}</label>
                    <input
                        value={fields.email.value}
                        onChange={this.handleChange}
                        name={fields.email.name}
                        id={fields.email.name}
                    />
                    <label htmlFor={fields.password.name}>{fields.password.label}</label>
                    <input
                        type="password"
                        value={fields.password.value}
                        onChange={this.handleChange}
                        name={fields.password.name}
                        id={fields.password.name}
                    />
                    <label htmlFor={fields.confirmPassword.name}>{fields.confirmPassword.label}</label>
                    <input
                        type="password"
                        value={fields.confirmPassword.value}
                        onChange={this.handleChange}
                        name={fields.confirmPassword.name}
                        id={fields.confirmPassword.name}
                    />
                    <Button buttonName={"Submit"} onClick={this.handleSubmit} />
                </form>
                {/* <Button buttonName={"Reset"} onClick={this.handleReset} /> */}
                <button onClick={this.handleReset}>Reset</button>
            </>
        )
    }
}

export default ValidatedForm;