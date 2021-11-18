import React from 'react'
import { Form, Field } from 'react-final-form'
import { useDispatch } from 'react-redux'
import { addBookThunk } from '../../thunks/addBookThunk';
import { message } from 'antd';
import EditField from './EditField';
import EditTextArea from './EditTextArea';

const EditForm = ({ nameValue, authorValue, descriptionValue, initialValue, updateBook }) => {
    console.log(updateBook, 'mark');
    const dispatch = useDispatch();
    const onSubmit = (event) => {
        // const data = {
        //     name: bookObj.name,
        //     author: bookObj.author,
        //     description: bookObj.description
        // }
        // const id = bookObj.uuids
        // console.log(bookObj, form);

        // form.reset();
        console.log(" submit event", event)
        const  id = event.uuid;
        const book = {
            name: event.name,
            author: event.author,
            description: event.description
        }
        console.log(id, book, 'vse')
        // dispatch(addBookThunk(data));
      updateBook(id, book);
    }
    console.log(initialValue);
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