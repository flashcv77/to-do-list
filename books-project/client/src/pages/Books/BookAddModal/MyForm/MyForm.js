import React from 'react'
import { MyField } from './MyField/MyField';
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { addBookThunk } from '../../thunks/addBookThunk';

const MyForm = () => {
    const dispatch = useDispatch();
    const onSubmit = (bookObj, form) => {
        dispatch(addBookThunk(bookObj));
        form.reset();
        // this.props.addBook(event)
        // console.log(event);
    };


    // console.log(this.props)
    return (
        <>
            <Form
                id="form"
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit} id="form">
                        <Field name="name" placeholder="Name" component={MyField} allowClear />
                        <Field name="author" placeholder="Author" component={MyField} allowClear />
                        <Field name="description" placeholder="description" component={MyField} allowClear
                        />
                    </form>
                )}
            />
        </>
    )

}

export default MyForm;