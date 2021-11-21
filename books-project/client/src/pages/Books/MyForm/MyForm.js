import React from 'react'
import { MyField } from './MyField/MyField';
import { Form, Field } from 'react-final-form'
import MyTextArea from './MyTextArea';

const MyForm = ({ initialValues, handleOnSubmit }) => {
    return (
        <>
            <Form
                initialValues={initialValues || {}}
                id="form"
                onSubmit={handleOnSubmit}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} id="form">
                        <Field name="name" placeholder="Name" component={MyField} allowClear
                        />
                        <Field name="author" placeholder="Author" component={MyField} allowClear
                        />
                        <Field name="description" placeholder="description" component={MyTextArea} allowClear
                        />
                    </form>
                )}
            />
        </>
    );
}

export default MyForm;