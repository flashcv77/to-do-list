import React from 'react'
import { MyField } from './MyField/MyField';
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { addBookThunk } from '../../thunks/addBookThunk';
import MyTextArea from './MyTextArea';

const MyForm = ({ nameValue, authorValue, descriptionValue, initialValue }) => {
    const dispatch = useDispatch();
    const onSubmit = (bookObj, form) => {
        const book = {
            name: bookObj.name,
            author: bookObj.author,
            description: bookObj.description
        }
        console.log(bookObj, form);
        dispatch(addBookThunk(book));
        form.reset();
    };
    console.log(initialValue);
    return (
        <>
            <Form
                initialValues={initialValue}
                id="form"
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} id="form">
                        <Field name="name" placeholder="Name" component={MyField} allowClear value={nameValue} />
                        <Field name="author" placeholder="Author" component={MyField} allowClear value={authorValue} />
                        <Field name="description" placeholder="description" component={MyTextArea} allowClear value={descriptionValue}
                        />
                    </form>
                )}
            />
        </>
    )

}

export default MyForm;