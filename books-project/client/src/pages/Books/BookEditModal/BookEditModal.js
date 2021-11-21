import { Button, Modal, Spin } from "antd";
import React, { useEffect } from "react";
import MyForm from "../MyForm";

export const BookEditModal = (props) => {
    const { visible, loading, id, updateBook, getBookData, bookEditData, closeModal } = props;

    useEffect(() => {
        getBookData(id)
    }, [])

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
            <Modal
                visible={visible}
                title="Update book"
                onCancel={() => closeModal()}
                confirmLoading={!loading}
                loading={loading}
                footer={[
                    <Button
                        type="secondary"
                        loading={loading}
                        key="back"
                        onClick={() => closeModal()}>
                        Return
                    </Button>,
                    <Button
                        form="form"
                        htmlType="form"
                        className="ant-btn ant-btn-primary"
                        key="submit"
                        type="primary"
                        loading={loading} >
                        Submit
                    </Button>,
                ]}
            >
                {<Spin spinning={loading} tip="Loading...">
                    <MyForm
                        form="form"
                        initialValues={bookEditData}
                        handleOnSubmit={onSubmit}
                    />
                </Spin>}
            </Modal>
        </>
    )
}

export default BookEditModal;