import React from 'react'
import { Modal, Button, Spin } from 'antd';
import MyForm from '../MyForm'
import PropTypes from 'prop-types';

export const BookAddModal = (props) => {
    const { visible, loading, addBook, closeModal } = props;
    const onSubmit = (bookObj, form) => {
        const book = {
            name: bookObj.name,
            author: bookObj.author,
            description: bookObj.description
        }
        addBook(book);
    };

    return (
        <>
            <Modal
                visible={visible}
                title="Create book"
                onCancel={() => closeModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        loading={loading}
                        key="back"
                        onClick={() => closeModal()}
                    >
                        Return
                    </Button>,
                    <Button
                        form="form"
                        htmlType="form"
                        className="ant-btn ant-btn-primary"
                        key="submit"
                        type="primary"
                        loading={loading}
                    >
                        Submit
                    </Button>,
                ]}
            >
                {<Spin spinning={loading} tip="Loading...">
                    <MyForm
                        handleOnSubmit={onSubmit}
                    />
                </Spin>}
            </Modal>
        </>
    );
}

BookAddModal.propTypes = {
    visible: PropTypes.bool,
    loading: PropTypes.bool,
    addBook: PropTypes.func,
    closeModal: PropTypes.func,
}

export default BookAddModal;