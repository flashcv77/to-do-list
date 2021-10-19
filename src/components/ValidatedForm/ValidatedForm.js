import React from "react";
import Button from "../Button";
import "./ValidatedForm.scss"


class ValidatedForm extends React.Component {
    state = {
        fields: {
            inputName: {
                name: "inputName",
                label: "Name",
                value: "",
                error: "",
                validator: (value = "") => {
                    return value.length >= 4 ? false : "Name should be at least 4 symbols";
                },
            },
            email: {
                name: "email",
                label: "Email",
                value: "",
                error: "",
                validator: (value = "") => {
                    return value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ? false : "Email is not valid";
                },
            },
            password: {
                name: "password",
                label: "Password",
                value: "",
                error: "",
                validator: (value = "") => {
                    return value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g) ? false : "Password is not valid, minimum 8 symbols, at least one letter and one number  ";
                },
            },
            confirmPassword: {
                name: "confirmPassword",
                label: "Confirm password",
                value: "",
                error: "",
                validator: (value = "") => {
                    return value === this.state.fields.password.value ? false : "Passwords dose not match";
                },
            },
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        const currentField = this.state.fields[name];
        let error = currentField.validator(value);
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: { ...currentField, value, error },
            },
        });
    }

    handleReset = (event) => {
        // event.preventDefault();
        const { fields } = this.state;
        for (let key in fields) {
            fields[key].error = '';
            fields[key].value = '';
        }
        this.setState({
            fields: {
                ...this.state.fields
            }
        });
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const { fields } = this.state;
        console.log("name: " + fields.inputName.value);
        console.log("email: " + fields.email.value)
        console.log("password: " + fields.password.value)
        console.log("confirmed password: " + fields.confirmPassword.value)
        this.handleReset();
    }

    handleValidate = (event) => {
        event.preventDefault();
        console.log("Fields didn't pass validation");
    }

    render() {
        const { fields } = this.state;
        const errors = [];
        for (let key in fields) {
            errors.push(fields[key].error);
        }
        console.log(errors);
        return (
            <>
                <form onSubmit={errors.some(elem => elem !== false) ? this.handleValidate : this.handleSubmit}>
                    <h1>Form</h1>
                    <div className="input-container">
                        <label htmlFor={fields.inputName.name}>{fields.inputName.label}</label>
                        <input
                            autoComplete="off"
                            className={fields.inputName.error ? "invalid" : "valid"}
                            placeholder={fields.inputName.label + "..."}
                            value={fields.inputName.value}
                            onChange={this.handleChange}
                            name={fields.inputName.name}
                            id={fields.inputName.name}
                        />
                        <div className="error"> {fields.inputName.error && <span>{fields.inputName.error}</span>}</div>
                    </div>

                    <div className="input-container">
                        <label htmlFor={fields.email.name}>{fields.email.label}</label>
                        <input
                            autoComplete="off"
                            className={fields.email.error ? "invalid" : "valid"}
                            placeholder={fields.email.label + "..."}
                            value={fields.email.value}
                            onChange={this.handleChange}
                            name={fields.email.name}
                            id={fields.email.name}
                        />
                        <div className="error"> {fields.email.error && <span>{fields.email.error}</span>}</div>
                    </div>

                    <div className="input-container">
                        <label htmlFor={fields.password.name}>{fields.password.label}</label>
                        <input
                            autoComplete="off"
                            className={fields.password.error ? "invalid" : "valid"}
                            placeholder={fields.password.label + "..."}
                            type="password"
                            value={fields.password.value}
                            onChange={this.handleChange}
                            name={fields.password.name}
                            id={fields.password.name}
                        />
                        <div className="error"> {fields.password.error && <span>{fields.password.error}</span>}</div>
                    </div>

                    <div className="input-container">
                        <label htmlFor={fields.confirmPassword.name}>{fields.confirmPassword.label}</label>
                        <input
                            autoComplete="off"
                            className={fields.confirmPassword.error ? "invalid" : "valid"}
                            placeholder={fields.confirmPassword.label + "..."}
                            type="password"
                            value={fields.confirmPassword.value}
                            onChange={this.handleChange}
                            name={fields.confirmPassword.name}
                            id={fields.confirmPassword.name}
                        />
                        <div className="error"> {fields.confirmPassword.error && <span>{fields.confirmPassword.error}</span>}</div>
                    </div>

                    <Button buttonName={"Submit"} onClick={errors.some(elem => elem !== false) ? this.handleValidate : this.handleSubmit} />

                </form>
                <button onClick={this.handleReset}>Reset</button>
                {/* <Button buttonName={"Reset"} onClick={this.handleReset} /> */}

            </>
        )
    }
}

export default ValidatedForm;