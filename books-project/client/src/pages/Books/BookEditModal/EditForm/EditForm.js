import React from 'react'
import { Form, Field } from 'react-final-form'
import EditField from './EditField';
import EditTextArea from './EditTextArea';

const EditForm = ({ nameValue, authorValue, descriptionValue, initialValue, updateBook }) => {
    const onSubmit = (event) => {
        const id = event.uuid;
        const book = {
            name: event.name,
            author: event.author,
            description: event.description
        }
        updateBook(id, book);
    }
    return (
        <>
            <Form
                initialValues={initialValue}
                id="editForm"
                onSubmit={onSubmit}
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