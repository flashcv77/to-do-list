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
    render() {

        return (

            <Form
                onSubmit={onSubmit}
                // initialValues={formData}
                validate={(values) => {

                    const errors = {};
                    if (!values.name) {
                        errors.name = "Required";
                    } else if
                        (values.name.length < 4) {
                        errors.name = "Name minimum 4 symbols, maximum 16";
                    }
                    if (!values.email) {
                        errors.email = "Requied";
                    } else if
                        (!values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                        errors.email = "Email is not valid";
                    }
                    if (!values.password) {
                        errors.password = "Required";
                    } else if
                        (!values.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g)) {
                        errors.password = "Password is not valid, minimum 8 symbols, at least one letter and one number  ";
                    }
                    if (!values.confirmPassword) {
                        errors.confirmPassword = "Required";
                    } else if (values.confirmPassword !== values.password) {
                        errors.confirmPassword = "Must match";
                    }
                    // console.log(values, '\n', errors);
                    return errors;
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (

                    <form onSubmit={handleSubmit}>
                        <h1>Form</h1>
                        {Object.entries(this.state.fields).map(([_, fieldsState]) => {
                            const { name, label, type, placeholder, autoComplete } = fieldsState;
                            // console.log(name, label, type, placeholder);
                            return (
                                <Field
                                    component={MyField}
                                    key={name}
                                    name={name}
                                    label={label}
                                    type={type}
                                    placeholder={placeholder}
                                    autoComplete={autoComplete}
                                />
                            );
                        })

                        }
                        <button
                            onClick={form.reset}
                            className="formButton"
                            disabled={submitting || pristine}>
                            Reset
                        </button>
                        <button
                            className="formButton"
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