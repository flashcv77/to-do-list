import React from 'react'
import { Form, Field } from 'react-final-form'
import EditField from './EditField';
import EditTextArea from './EditTextArea';

const EditForm = ({ nameValue, authorValue, descriptionValue, initialValue, updateBook, closeModal,handleSubmit}) => {
   
    return (
        <>
            <Form
                initialValues={initialValue}
                id="editForm"
                // onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} id="editForm">
                        <Field name="name" placeholder="Name" component={EditField} allowClear value={nameValue} />
                        <Field name="author" placeholder="Author" component={EditField} allowClear value={authorValue} />
                        <Field name="description" placeholder="description" component={EditTextArea} allowClear value={descriptionValue}
                        />
                    </form>
                )}
            />
        </>
    )

}

export default EditForm;