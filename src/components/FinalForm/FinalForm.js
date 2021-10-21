import React from "react";
import { Field, Form } from "react-final-form";
import styles from "./OtherFinalForumRecord.module.scss";
import "../ValidatedForm/ValidatedForm.scss"

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
};

class FinalForm extends React.Component  {
    
    state = {
        fields: {
            inputName: {
                name: "inputName",
                label: "Name",
                type: "text",
            },
            email: {
                name: "email",
                label: "Email",
                type: "email",
            },
            password: {
                name: "password",
                label: "Password",
                type: "password",
            },
            confirmPassword: {
                name: "confirmPassword",
                label: "Confirm password",
                type: "password",
            },
        },
    }
render() {
    let formData = {

    }
    return (

        <Form
            onSubmit={onSubmit}
            initialValues={formData}
            validate={(values) => {
                const errors = {};
                if (!values.username) {
                    errors.username = "Required";
                }
                if (!values.password) {
                    errors.password = "Required";
                }
                if (!values.confirm) {
                    errors.confirm = "Required";
                } else if (values.confirm !== values.password) {
                    errors.confirm = "Must match";
                }
                return errors;
            }}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field name="username">
                        {({ input, meta }) => (
                            <div>
                                <label>Username</label>
                                <input {...input} type="text" placeholder="Username" autoComplete="off" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>

                    {/* <Field name="password">
                        {({ input, meta }) => (
                            <div>
                                <label>Password</label>
                                <input {...input} type="password" placeholder="Password" autoComplete="off" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field name="confirm">
                        {({ input, meta }) => (
                            <div>
                                <label>Confirm </label>
                                <input {...input} type="password" placeholder="Confirm" autoComplete="off" />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field> */}
                    
                    <div className={styles.buttons}>
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={form.reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />

    );
};
}
    

export default FinalForm;