import React from 'react'
import { MyField } from './MyField/MyField';
import { Form, Field } from 'react-final-form'
// import { useDispatch } from 'react-redux'
// import { addBookThunk } from '../../thunks/booksThunk';
import MyTextArea from './MyTextArea';

const MyForm = ({ nameValue, authorValue, descriptionValue, initialValue, onSubmit, formName }) => {
    console.log(onSubmit);
    console.log(initialValue);
    return (
        <>
            <Form
                initialValues={initialValue}
                id={formName}
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} id={formName}>
                        <Field name="name" placeholder="Name" component={MyField} allowClear value={nameValue} />
                        <Field name="author" placeholder="Author" component={MyField} allowClear value={authorValue} />
                        <Field name="description" placeholder="description" component={MyTextArea} allowClear value={descriptionValue}
                        />
                    </form>
                )}
            />
        </>
    );
}

export default MyForm;