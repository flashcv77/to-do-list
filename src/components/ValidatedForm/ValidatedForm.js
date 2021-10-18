import React from "react";

class ValidatedForm extends React.Component {
    state = {
        fields: {
            fields.inputName: {
    name: "name", //fields.inputName , <label for="name"></label>
        label: "Name", //<label> ... </label>
            value: "", // |_value_______| <- input
                error: null,
                    validator: (value = "") => {
                        return value ? false : "Required";
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
        label: "confirmPassword",
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
    // console.log(event.target);
    // console.log("value: " + value); //input value
    // console.log("name: " + name); //input name
    // const currentField = this.state.fields[name];
    // console.log(currentField);
    this.setState({
        fields: {
            ...this.state.fields,
            value: value,
        },
    });
    // console.log(this.state.fields);
};

render() {
    const { fields } = this.state;
    return (
        <>
            <label htmlFor={fields.inputName.name}>{fields.inputName.label}</label>
            <input
                value={fields.inputName.value}
                onChange={this.handleChange}
                name={fields.inputName.name}
                id={fields.inputName.name}
            />
        </>
    )
}
}

export default ValidatedForm;