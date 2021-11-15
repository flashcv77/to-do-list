import React from 'react'
import { MyField } from './MyField/MyField';
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { addBookThunk } from '../../thunks/addBookThunk';

const MyForm = () => {
    const dispatch = useDispatch();
    const onSubmit = event => {
        dispatch(addBookThunk(event));
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
                        <Field name="name" placeholder="Name" component={MyField} />
                        <Field name="author" placeholder="Author" component={MyField} />
                        <Field name="description" placeholder="description" component={MyField}
                        />
                    </form>
                )}
            />
        </>
    )

}

export default MyForm;