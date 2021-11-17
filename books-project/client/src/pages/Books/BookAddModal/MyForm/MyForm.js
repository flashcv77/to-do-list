import React from 'react'
import { MyField } from './MyField/MyField';
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { addBookThunk } from '../../thunks/addBookThunk';
import MyTextArea from './MyTextArea';
import { message } from 'antd';

const MyForm = ({ nameValue, authorValue, descriptionValue, initialValue }) => {
    const dispatch = useDispatch();
    const onSubmit = (bookObj, form) => {
        const data = {
            name: bookObj.name,
            author: bookObj.author,
            description: bookObj.description
        }
        console.log(bookObj, form);
        dispatch(addBookThunk(data));
        form.reset();
        setTimeout(() => {
            message.success('Book has been added');
        }, 2000)

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