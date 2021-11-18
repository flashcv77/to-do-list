import React from 'react'
import { Modal, Button, Spin } from 'antd';
import MyForm from '../MyForm'
import { useDispatch } from 'react-redux';
import { createBookThunk } from '../thunks/booksThunk';

export const BookAddModal = (props) => {
    const { visible, loading, hideModal } = props;
    const dispatch = useDispatch();
    const onAddSubmit = (bookObj, form) => {
        const book = {
            name: bookObj.name,
            author: bookObj.author,
            description: bookObj.description
        }
        console.log(bookObj, form);
        dispatch(createBookThunk(book));
        form.reset();
    };
    const addName = "addForm";
    return (
        <>

            <Modal
                visible={visible}
                title="Create book"
                onCancel={() => hideModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        key="back"
                        onClick={() => hideModal()}>
                        Return
                    </Button>,
                    <button
                        form="addForm"
                        className="ant-btn ant-btn-primary"
                        key="submit"
                        type="primary"
                        loading={loading} >
                        Submit
                    </button>,
                ]}
            >
                {<Spin spinning={loading} tip="Loading...">
                    <MyForm
                        formName={addName}
                        onSubmit={onAddSubmit}
                    />
                </Spin>}
            </Modal>

        </>
    );
}

export default BookAddModal;