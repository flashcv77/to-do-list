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
                validator: (value = "", allValues = {}) => {
                    // console.log(this);
                    console.log(allValues);
                    // console.log(value, allValues.password);
                    return value === allValues.password ? false : "Passwords dose not match";
                },
            },
        },
        isError: null,
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        const { fields } = this.state;
        const currentField = this.state.fields[name];
        const allValues = Object.entries(fields).reduce((accum, [fieldName, fieldState]) => {
            return { ...accum, [fieldName]: fieldState.value }
        });

        let error = currentField.validator(value, allValues);
        this.setState({
            fields: {
                ...this.state.fields,
                [name]: { ...currentField, value, error },
            },
        });
    }

    handleReset = (event) => {
        event.preventDefault();
        const { fields } = this.state;
        const updatedValues = {};
        Object.entries(fields).forEach(([fieldName]) => {
            const updatedFields = { ...fields[fieldName] }
            updatedFields.value = '';
            updatedFields.error = false;
            updatedValues[fieldName] = updatedFields
        });
        this.setState({ fields: updatedValues });

        // for (let key in fields) {
        //     fields[key].error = '';
        //     fields[key].value = '';
        // }
        // this.setState({
        //     fields: {
        //         ...this.state.fields
        //     }
        // });

    }


    handleSubmit = (event) => {
        event.preventDefault();

        const { fields } = this.state;
        // console.log("name: ", fields.inputName.value);
        // console.log("email: ", fields.email.value)
        // console.log("password: ", fields.password.value)
        // console.log("confirmed password: ", fields.confirmPassword.value)
        const { value, name } = event.target;
        const currentField = this.state.fields[name];
        console.log(currentField);
        const updatedFields = {};
        Object.entries(fields).forEach(([fieldName, fieldState]) => {
            const updatedField = { ...fieldState };
            const error = fieldState.validator(fieldState.value);
            updatedField.error = error;
            updatedFields[fieldName] = updatedField;
        })

        // const allValues = Object.entries(fields).reduce((accum, [fieldName, fieldState]) => {
        //     return { ...accum, [fieldName]: fieldState.value }
        // });
        // // console.log(currentField);
        // let error = currentField.validator(value, allValues);
        // console.log(currentField, ' qq', value, ' ww', error)
        // this.setState({
        //     fields: {
        //         updatedFields,
        //         [name]: { ...currentField, value, error },
        //     }
        // });
        this.setState({ fields: updatedFields });
        // console.log(allValues.password);
        // this.handleReset();

    }

    render() {
        const { fields } = this.state;
        const errors = [];
        for (let key in fields) {
            errors.push(fields[key].error);
        }
        // console.log(errors);
        return (
            <>
                <form onSubmit={this.handleSubmit}>
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

                    <Button buttonName={"Submit"} />

                    <button onClick={this.handleReset}>Reset</button>
                </form>
                {/* <Button buttonName={"Reset"} onClick={this.handleReset} /> */}

            </>
        )
    }
}

export default ValidatedForm;