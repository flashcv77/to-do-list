import React from "react";
import { Field, Form } from "react-final-form";
// import styles from "./OtherFinalForumRecord.module.scss";
import "../ValidatedForm/ValidatedForm.scss"
import MyField from "../MyField";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

const validators = {
    name: (value) => {
        let errors = {};
        if (value && value.length < 4) {
            errors.name = "Name minimum 4 symbols";
            return errors.name;
        }
    },
    email: (value) => {
        let errors = {};
        if (value && !value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
            errors.email = "Email is not valid";
            return errors.email;
        }
    },
    password: (value) => {
        console.log(value);
        let errors = {};
        if (!value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)) {
            errors.password = "Password is not valid, minimum 8 symbols, at least one letter and one number  ";
            return errors.password;
        }
    },
    confirmPassword: (value, allValues) => {
        let errors = {};
        console.log("value.password", allValues);
        console.log(value);
        if (value !== allValues.password) {
            errors.confirmPassword = "Must match";
            return errors.confirmPassword;
        }
    }
}

class FinalForm extends React.Component {

    state = {
        fields: {
            name: {
                name: "name",
                label: "Name",
                type: "text",
                placeholder: "Name..."
            },
            email: {
                name: "email",
                label: "Email",
                type: "email",
                placeholder: "Email..."
            },
            password: {
                name: "password",
                label: "Password",
                type: "password",
                placeholder: "Password..."
            },
            confirmPassword: {
                name: "confirmPassword",
                label: "Confirm password",
                type: "password",
                placeholder: "Confirm password..."
            },
        },
    }
    required = (value, allValues) => (
        value ? undefined : "Required");
    composeValidators = (validators) => (value, allValues) => {
        let error = undefined;
        for (let i = 0; i < validators.length; i++) {
            error = validators[i](value, allValues);
            if (error) {
                return error;
            }
        }
        return error;
    }

    render() {
        return (
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <h1>Form</h1>
                        {Object.entries(this.state.fields).map(([_, fieldsState]) => {
                            const { name, label, type, placeholder, autoComplete } = fieldsState;
                            return (
                                <Field
                                    component={MyField}
                                    validate={this.composeValidators([
                                        this.required,
                                        validators[name]
                                    ])}
                                    key={name}
                                    name={name}
                                    label={label}
                                    type={type}
                                    placeholder={placeholder}
                                // autoComplete={autoComplete}
                                />
                            );
                        })

                        }
                        <button
                            onClick={form.reset}
                            disabled={submitting || pristine}>
                            Reset
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                        >
                            Submit
                        </button>
                        <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />

        );
    };
}


export default FinalForm;